'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/data/site';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-porcelain/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link href="/" className="group">
          <span className="block font-serif text-2xl tracking-tight text-ink transition group-hover:text-gold">
            Daniel Lăpăduș
          </span>
          <span className="-mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-muted">
            Photography
          </span>
        </Link>

        <nav aria-label="Meniu principal" className="flex flex-wrap items-center justify-end gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  isActive
                    ? 'bg-ink text-porcelain'
                    : 'text-ink/80 hover:bg-parchment hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
