import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as = 'h2'
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
      ) : null}
      <HeadingTag className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{title}</HeadingTag>
      {description ? (
        <div className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{description}</div>
      ) : null}
    </div>
  );
}
