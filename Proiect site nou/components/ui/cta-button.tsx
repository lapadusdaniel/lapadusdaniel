import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  target?: string;
  rel?: string;
};

export function CtaButton({
  href,
  children,
  variant = 'primary',
  target,
  rel
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={
        variant === 'primary'
          ? 'inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-porcelain transition hover:bg-gold hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
          : 'inline-flex items-center justify-center rounded-full border border-ink/30 bg-white px-6 py-3 text-sm font-medium text-ink transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2'
      }
    >
      {children}
    </Link>
  );
}
