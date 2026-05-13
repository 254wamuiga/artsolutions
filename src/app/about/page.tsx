'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="pt-32 px-8 md:px-24 pb-32 max-w-5xl mx-auto">
            <header className="mb-24">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">03 — About</span>
                <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">Kamau Wamuiga</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8 pb-2 border-b border-border">Methods</h2>
                    <div className="space-y-12">
                        <div>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                I'm a product designer and developer based in Nairobi, Kenya. I build digital experiences that bridge the gap between thought and execution — interfaces that are both purposeful and alive.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                My work spans brand identity, web applications, e-commerce, and visualization tools. I'm most at home when the problem needs both design sensibility and engineering depth — where visual precision and system thinking have to coexist in the same build.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-serif mb-4">How I work</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                I start with the "why" behind the brief, translate business goals into interface logic, and ship work that moves the needle — not just work that looks good in a mockup. The process is equal parts clarity, creativity, and execution.
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="space-y-12"
                >
                    <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8 pb-2 border-b border-border">Stack</h2>
                    <div className="grid grid-cols-2 gap-8 font-mono text-[11px] uppercase tracking-widest">
                        <div className="space-y-2">
                            <span className="text-muted-foreground block border-b border-border/50 pb-1">Frameworks</span>
                            <span>Next.js</span>
                            <span className="block">React 19</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-muted-foreground block border-b border-border/50 pb-1">Logic</span>
                            <span>TypeScript</span>
                            <span className="block">Node.js</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-muted-foreground block border-b border-border/50 pb-1">Visual</span>
                            <span>Tailwind v4</span>
                            <span className="block">Framer Motion</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-muted-foreground block border-b border-border/50 pb-1">Infrastructure</span>
                            <span>Vercel</span>
                            <span className="block">Docker / CI</span>
                        </div>
                    </div>

                    <div className="pt-12">
                        <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-8 pb-2 border-b border-border">Contact</h2>
                        <a href="mailto:kelvinwamuiga@gmail.com" className="text-2xl font-serif hover:italic transition-all">
                            kelvinwamuiga@gmail.com
                        </a>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
