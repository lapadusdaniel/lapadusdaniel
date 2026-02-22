import Link from 'next/link';
import { locations, navigation, siteConfig } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <h2 className="font-serif text-2xl text-ink">Daniel Lăpăduș</h2>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Fotograf nuntă, botez și eveniment în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Navigare</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="text-ink transition hover:text-gold" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            <li>
              <a className="transition hover:text-gold" href={`tel:${siteConfig.phoneRaw}`}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="transition hover:text-gold" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a className="transition hover:text-gold" href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted">Disponibil în {locations.join(', ')} și împrejurimi.</p>
        </div>
      </div>
      <div className="border-t border-black/5 px-6 py-4 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} Daniel Lăpăduș Photography. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
