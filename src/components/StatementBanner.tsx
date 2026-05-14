'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { PlusIcon } from 'lucide-react';

const STATEMENTS = [
  { line1: 'Still figuring things out.', line2: 'Shipping anyway.' },
  { line1: 'Developing for', line2: 'Impact.' },
  { line1: 'Delivering', line2: 'Outcomes.' },
];

export function StatementBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % STATEMENTS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative border-x border-border overflow-hidden">

          {/* Animated statement */}
          <div className="relative flex flex-col p-6 md:p-10 min-h-[220px] md:min-h-[280px] justify-between bg-secondary dark:bg-secondary/30">
            <div className="relative h-[100px] md:h-[120px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={current}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -28 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute text-foreground text-4xl md:text-5xl font-sans font-bold tracking-tight"
                >
                  {STATEMENTS[current].line1} <br /> {STATEMENTS[current].line2}
                </motion.h2>
              </AnimatePresence>
            </div>

            <div className="flex gap-2 items-center">
              {STATEMENTS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-[2px] rounded-full bg-foreground origin-left"
                  animate={{ width: i === current ? 28 : 10, opacity: i === current ? 1 : 0.25 }}
                  transition={{ duration: 0.35 }}
                  aria-label={`Statement ${i + 1}`}
                />
              ))}
            </div>

            <PlusIcon className="-right-[12.5px] -top-[12.5px] absolute z-20 size-6 text-border" strokeWidth={1} />
            <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-20 size-6 text-border" strokeWidth={1} />
          </div>

          {/* CTA row */}
          <div className="flex items-center justify-between border-t border-border px-6 md:px-10 py-6">
            <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">
              Available for select projects — 2026
            </p>
            <Link
              href="/work"
              className="font-mono text-xs uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity"
            >
              View selected work →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
