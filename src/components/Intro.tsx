'use client';

import { motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Intro() {
    return (
        <section className="relative bg-background overflow-hidden">
            <div className="container mx-auto max-w-7xl px-8 md:px-24 pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8 block">
                        01 — Positioning
                    </span>

                    <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-balance mb-12">
                        Building systems that bridge the gap between <span className="italic text-muted-foreground/60">thought</span> and <span className="italic">execution.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed max-w-5xl">
                        <p className="text-lg">
                            I operate as a single-person agency, providing 360° coverage from initial user research and product definition to high-fidelity design, resilient development, and long-term systems automation.
                        </p>
                        <p className="text-lg font-serif italic text-foreground/80">
                            This is not just code. This is craftsmanship in the service of product strategy.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Process Grid Section - Blueprint Style */}
            <div className="relative mt-12 md:mt-24">
                {/* Top Viewport Divider */}
                <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border z-10" />

                <div className="container mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 border-l border-r border-border relative">
                    {[
                        ["Research", "Contextual investigation & Product thinking"],
                        ["Design", "System-first UI/UX & High-fidelity motion"],
                        ["Engine", "Scalable Next.js systems & API architecture"],
                        ["Ops", "Automation, CI/CD & Systems thinking"]
                    ].map(([title, desc], i) => (
                        <div
                            key={title}
                            className={cn(
                                "relative flex flex-col p-6 md:p-10 border-b border-border min-h-[180px] md:min-h-[220px]",
                                (i % 2 === 0) ? "border-r" : "md:border-r",
                                (i === 1 || i === 3) ? "bg-secondary dark:bg-secondary/30" : "bg-background"
                            )}
                        >
                            <span className="font-mono text-[10px] uppercase tracking-widest block mb-4 opacity-50 font-bold">0{i + 1}.</span>
                            <h3 className="text-foreground text-xl md:text-2xl font-serif font-medium mb-2">{title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>

                            {/* Blueprint Plus Icons */}
                            <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-20 size-6 text-border" strokeWidth={1} />
                            {i === 0 && <PlusIcon className="-left-[12.5px] -top-[12.5px] absolute z-20 size-6 text-border" strokeWidth={1} />}
                        </div>
                    ))}
                </div>

                {/* Bottom Viewport Divider */}
                <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border z-10" />
            </div>
        </section>
    );
}
