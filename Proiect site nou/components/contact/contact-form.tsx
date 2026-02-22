'use client';

import { FormEvent, useEffect, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
  company: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  eventType: 'Nuntă',
  message: '',
  company: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submittedAt, setSubmittedAt] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  useEffect(() => {
    setSubmittedAt(Date.now());
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          submittedAt
        })
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? 'Cererea nu a putut fi trimisă.');
      }

      setStatus({
        type: 'success',
        message: payload.message ?? 'Mesaj trimis cu succes. Revin cu un răspuns cât mai curând.'
      });
      setForm(initialState);
      setSubmittedAt(Date.now());
    } catch (error) {
      const fallbackMessage = 'A apărut o problemă. Încearcă din nou sau scrie-mi pe WhatsApp.';
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : fallbackMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-ink">
          <span>Nume</span>
          <input
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-gold"
            type="text"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            required
            autoComplete="name"
            maxLength={80}
          />
        </label>

        <label className="space-y-2 text-sm text-ink">
          <span>Email</span>
          <input
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-gold"
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            required
            autoComplete="email"
            maxLength={120}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-ink">
          <span>Telefon</span>
          <input
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-gold"
            type="tel"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            required
            autoComplete="tel"
            maxLength={30}
          />
        </label>

        <label className="space-y-2 text-sm text-ink">
          <span>Tip eveniment</span>
          <select
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-gold"
            value={form.eventType}
            onChange={(event) => setForm((current) => ({ ...current, eventType: event.target.value }))}
            required
          >
            <option>Nuntă</option>
            <option>Botez</option>
            <option>Majorat</option>
            <option>Eveniment privat</option>
            <option>Eveniment corporate</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm text-ink">
        <span>Mesaj</span>
        <textarea
          className="min-h-[160px] w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-gold"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          required
          maxLength={2400}
        />
      </label>

      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input type="hidden" name="submittedAt" value={submittedAt} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-porcelain transition hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Trimit...' : 'Trimite mesajul'}
      </button>

      {status.type !== 'idle' ? (
        <p className={`text-sm ${status.type === 'success' ? 'text-emerald-700' : 'text-rose-700'}`}>{status.message}</p>
      ) : null}

      <p className="text-xs text-muted">
        Formularul include protecție anti-spam (honeypot + validare temporizare).
      </p>
    </form>
  );
}
