import type { ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = '' }: PageShellProps) {
  return <main className={`mx-auto w-full max-w-6xl px-6 py-14 sm:px-8 sm:py-20 ${className}`}>{children}</main>;
}
