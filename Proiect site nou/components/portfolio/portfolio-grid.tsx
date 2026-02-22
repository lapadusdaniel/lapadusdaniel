'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { categoryLabels, portfolioItems, type PortfolioCategory, type PortfolioItem } from '@/data/portfolio';

type ActiveFilter = 'toate' | PortfolioCategory;

const filters: Array<{ key: ActiveFilter; label: string }> = [
  { key: 'toate', label: 'Toate' },
  { key: 'nunta', label: 'Nuntă' },
  { key: 'botez', label: 'Botez' },
  { key: 'evenimente', label: 'Alte evenimente' }
];

function getNextIndex(current: number, direction: 'next' | 'prev', length: number) {
  if (direction === 'next') {
    return (current + 1) % length;
  }

  return (current - 1 + length) % length;
}

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('toate');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'toate') {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => {
          const currentIndex = current ?? 0;
          return getNextIndex(currentIndex, 'next', filteredItems.length);
        });
      }

      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => {
          const currentIndex = current ?? 0;
          return getNextIndex(currentIndex, 'prev', filteredItems.length);
        });
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [filteredItems.length, selectedItem]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter.key
                ? 'bg-ink text-porcelain'
                : 'border border-black/10 bg-white text-ink hover:border-gold hover:text-gold'
            }`}
            aria-pressed={activeFilter === filter.key}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid-masonry">
        {filteredItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.02 }}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-black/5 bg-white text-left"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="font-serif text-xl text-ink">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                {categoryLabels[item.category]} · {item.location}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <Lightbox
            item={selectedItem}
            onClose={() => setSelectedIndex(null)}
            onNext={() => setSelectedIndex((current) => getNextIndex(current ?? 0, 'next', filteredItems.length))}
            onPrev={() => setSelectedIndex((current) => getNextIndex(current ?? 0, 'prev', filteredItems.length))}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Lightbox({
  item,
  onClose,
  onNext,
  onPrev
}: {
  item: PortfolioItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-black"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-black hover:bg-white"
          onClick={onClose}
        >
          Închide
        </button>

        <button
          type="button"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-black hover:bg-white"
          onClick={onPrev}
          aria-label="Imaginea anterioară"
        >
          ‹
        </button>

        <button
          type="button"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-black hover:bg-white"
          onClick={onNext}
          aria-label="Imaginea următoare"
        >
          ›
        </button>

        <div className="relative max-h-[94vh] w-full">
          <Image
            src={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="h-auto max-h-[88vh] w-full object-contain"
            priority
          />
        </div>

        <div className="border-t border-white/20 bg-black px-5 py-4 text-white/90">
          <p className="font-serif text-2xl">{item.title}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">{item.location}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
