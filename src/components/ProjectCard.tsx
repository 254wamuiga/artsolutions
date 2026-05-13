'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
    slug: string;
    title: string;
    client: string;
    description: string;
    type: 'live' | 'concept';
    date: string;
    industry: string;
    design: string;
    website?: string;
    image?: string;
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-border"
        >
            {/* Left: Image Preview */}
            <Link href={`/work/${project.slug}`} className="group block">
                <div className="aspect-video w-full bg-muted/30 border border-border overflow-hidden relative rounded-sm">
                    {project.image ? (
                        project.image.endsWith('.webm') ? (
                            <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        )
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="font-serif text-[8rem] italic">{project.title.charAt(0)}</span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Right: Metadata Panel */}
            <div className="flex flex-col justify-between py-2">
                <div>
                    <Link href={`/work/${project.slug}`}>
                        <h3 className="text-2xl md:text-3xl font-serif mb-2 hover:opacity-70 transition-opacity">
                            {project.title}
                        </h3>
                    </Link>

                    <div className="flex items-center gap-2 mb-4">
                        <span className="font-medium text-sm">{project.client}</span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4">
                        {project.date}
                    </p>

                    <p className="text-muted-foreground leading-relaxed text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    <Link href={`/work/${project.slug}`} className="text-sm font-medium hover:underline">
                        See more
                    </Link>
                </div>

                <div className="mt-8 space-y-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs">
                        <div>
                            <span className="text-muted-foreground block mb-1">Industry</span>
                            <span className="border border-border rounded-sm px-2 py-0.5">{project.industry}</span>
                        </div>
                        <div>
                            <span className="text-muted-foreground block mb-1">Design</span>
                            <span className="border border-border rounded-sm px-2 py-0.5 inline-flex items-center gap-1">
                                {project.design} <ArrowUpRight size={10} />
                            </span>
                        </div>
                    </div>

                    {project.website && (
                        <div className="text-xs">
                            <span className="text-muted-foreground block mb-1">Company</span>
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-border rounded-sm px-2 py-0.5 inline-flex items-center gap-1 hover:bg-muted transition-colors"
                            >
                                Website <ArrowUpRight size={10} />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
