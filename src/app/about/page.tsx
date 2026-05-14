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
                    <div className="space-y-8">
                        <p className="text-muted-foreground leading-relaxed">
                            I've been designing and building things for a while now, and the honest version of how I work is this: I'm better at finding the problem underneath the problem than I am at immediately jumping to a solution.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            That probably sounds like a strange thing to put on a portfolio. But it's why the work tends to go further than the brief.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            When I'm handed a project, my first instinct is to understand what the person on the other side is actually trying to resolve — not just what they're trying to do. A form is a task. A confident decision is a need. Most briefs describe tasks. The interesting work is in the needs.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From there I design with intention — trying to build interfaces and systems that reduce friction, build trust, and occasionally open up possibilities nobody asked for.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I'm currently focused on the intersection of product design, workflow automation, and how AI can support better decision-making in everyday tools. It's an area I'm actively learning in, and one I'm building toward.
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="space-y-12"
                >
                    <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 pb-2 border-b border-border">Stack</h2>
                    <p className="text-xs text-muted-foreground mb-8">Tools I'm currently working with:</p>
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
