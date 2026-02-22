import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  eventType?: unknown;
  message?: unknown;
  company?: unknown;
  submittedAt?: unknown;
};

const requestsByIp = new Map<string, number[]>();

function getIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown';
  }

  return request.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const limit = 6;

  const entries = requestsByIp.get(ip) ?? [];
  const fresh = entries.filter((timestamp) => now - timestamp < windowMs);

  fresh.push(now);
  requestsByIp.set(ip, fresh);

  return fresh.length > limit;
}

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[+0-9\s().-]{7,25}$/.test(phone);
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        message: 'Ai trimis prea multe cereri într-un timp scurt. Încearcă din nou peste câteva minute.'
      },
      { status: 429 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'Datele transmise nu sunt valide.' }, { status: 400 });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email).toLowerCase();
  const phone = asTrimmedString(payload.phone);
  const eventType = asTrimmedString(payload.eventType);
  const message = asTrimmedString(payload.message);
  const honeypot = asTrimmedString(payload.company);
  const submittedAt = Number(payload.submittedAt);

  if (honeypot) {
    return NextResponse.json({ message: 'Mesaj trimis. Mulțumesc!' });
  }

  if (!Number.isFinite(submittedAt) || Date.now() - submittedAt < 3500) {
    return NextResponse.json(
      {
        message: 'Formularul a fost trimis prea rapid. Verifică datele și încearcă din nou.'
      },
      { status: 400 }
    );
  }

  if (!name || !email || !phone || !eventType || !message) {
    return NextResponse.json({ message: 'Completează toate câmpurile obligatorii.' }, { status: 400 });
  }

  if (name.length > 80 || message.length > 2400 || eventType.length > 80 || phone.length > 30) {
    return NextResponse.json({ message: 'Datele trimise sunt prea lungi.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: 'Adresa de email nu este validă.' }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ message: 'Numărul de telefon nu este valid.' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    const webhookResponse = await fetch(webhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        eventType,
        message,
        source: 'lapadusdaniel.photography',
        createdAt: new Date().toISOString(),
        ip,
        userAgent: request.headers.get('user-agent') ?? 'unknown'
      })
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          message: 'Cererea nu a putut fi livrată. Te rog încearcă din nou sau scrie pe WhatsApp.'
        },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({
    message: 'Mulțumesc! Mesajul a fost trimis și revin cu un răspuns cât mai curând.'
  });
}
