'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard, type Project } from '@/components/ProjectCard';

const PROJECTS: Project[] = [
    // ── Live Projects ──
    {
        slug: 'visualizer-ef',
        title: 'Visualizer EF',
        client: 'Elegant Fittings',
        description: 'The client wasn\'t struggling to fill the sample request form. She was struggling to decide. Built a decision-support visualizer — see the surface in real kitchen and bathroom settings, change the slab, save combinations — so the form became the final step of a decision already made.',
        type: 'live',
        date: '2024',
        industry: 'Interior Design',
        design: 'Web Application',
        website: 'https://visualize-f1c35.web.app/',
        image: '/Visualizer-gif.webm',
    },
    {
        slug: 'aureto',
        title: 'Aureto',
        client: 'Aureto',
        description: 'Western checkout flows assume a credit card. In Kenya, the customer assumes M-Pesa — a different interaction, different timing, different trust model. Built Aureto\'s entire commerce platform from scratch: luxury storefront, inventory system, and a payment architecture engineered specifically for African mobile money behavior.',
        type: 'live',
        date: '2024',
        industry: 'Luxury Retail',
        design: 'E-Commerce Architecture',
    },
    {
        slug: 'bensonic',
        title: 'Bensonic',
        client: 'Bensonic Tech',
        description: 'Security hardware buyers don\'t impulse-buy. They research, compare, and need credibility signals before committing to a CCTV system or network build. Built a full e-commerce platform that does the selling before the salesperson calls — structured catalog, clear specs, trust-first UX.',
        type: 'live',
        date: '2024',
        industry: 'Technology & E-Commerce',
        design: 'E-Commerce Platform',
        website: 'https://bensonic.co.ke/',
        image: '/bsonic-gif.webm',
    },
    {
        slug: 'linaya',
        title: 'Linaya',
        client: 'Linaya',
        description: 'A lifestyle brand with a strong point of view and no digital presence to carry it. The gap wasn\'t just a website — it was a place where the brand\'s story could land with the weight it deserved. Built a refined experience where the aesthetic does the persuading before a word is read.',
        type: 'live',
        date: '2024',
        industry: 'Lifestyle',
        design: 'Web Design',
        website: 'https://linaya.co.ke/',
        image: '/LINAYA-gif.webm',
    },

    // ── Concept Projects ──
    {
        slug: 'laketi',
        title: 'Laketi',
        client: 'Concept Brief',
        description: 'Most African fashion brands default to safe, western-adjacent aesthetics to appear credible. LAKETI by RED was built to reject that trade-off — bold, culturally rooted visual language that\'s premium precisely because it doesn\'t apologize.',
        type: 'concept',
        date: '2024',
        industry: 'Fashion & Lifestyle',
        design: 'Brand Identity & App Concept',
        website: 'https://www.behance.net/gallery/157162697/L-A-K-E-T-I-by-RED',
        image: '/Laketi.webp',
    },
    {
        slug: 'magol-car-hire',
        title: 'Magol Car Hire',
        client: 'Concept Brief',
        description: 'Executive car hire in Kenya still runs on calls and WhatsApp. No trust signal, no pricing clarity, no booking confidence. Designed a landing page and booking UI that gives a premium service the digital credibility to close before the phone call happens.',
        type: 'concept',
        date: '2024',
        industry: 'Automotive',
        design: 'Landing Page & UI/UX',
        website: 'https://www.behance.net/gallery/162581607/MAGOL-Executive-Car-Hire',
        image: '/Magol Car Hire-gif.webm',
    },
    {
        slug: 'yum-honey',
        title: 'Yum Honey',
        client: 'Concept Brief',
        description: 'On shelf, artisan honey looks like every other jar. The product inside is different — the packaging was doing nothing to say so. Built a full brand identity and packaging system that turns the shelf moment into a story worth stopping for.',
        type: 'concept',
        date: '2024',
        industry: 'Food & Beverage',
        design: 'Brand Identity & Packaging',
        website: 'https://www.behance.net/gallery/143861559/Yum-Honey',
        image: '/Yum Honey-gif.webm',
    },
];


export default function WorkPage() {
    const [activeTab, setActiveTab] = useState<'live' | 'concept'>('live');

    const filteredProjects = PROJECTS.filter(p => p.type === activeTab);

    return (
        <main className="pt-32 px-8 md:px-24 min-h-screen max-w-6xl mx-auto">
            <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-xl">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 block">02 — Selection</span>
                    <h1 className="text-5xl font-serif">Selected Work</h1>
                    <p className="mt-6 text-muted-foreground leading-relaxed">
                        A curated collection of projects — each one started with the wrong question being asked, and ended with the right product being built.
                    </p>
                </div>

                <div className="flex border-b border-border w-fit">
                    {['live', 'concept'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className="relative p-4 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors"
                        >
                            <span className={activeTab === tab ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                                {tab === 'live' ? 'Live (POC)' : 'Concept Briefs'}
                            </span>
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="tab-active"
                                    className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </header>

            <div className="grid grid-cols-1 gap-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}
