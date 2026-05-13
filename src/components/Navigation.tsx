'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navigation() {
    const pathname = usePathname();
    const [isDarkSection, setIsDarkSection] = useState(false);

    // Reset nav to light on every route change, then let scroll events override
    useEffect(() => {
        const globalDark = document.documentElement.classList.contains('dark');
        setIsDarkSection(globalDark);
    }, [pathname]);

    useEffect(() => {
        const handler = (e: Event) => {
            setIsDarkSection((e as CustomEvent<{ dark: boolean }>).detail.dark);
        };
        window.addEventListener('nav-theme', handler);
        return () => window.removeEventListener('nav-theme', handler);
    }, []);

    const links = [
        { href: '/work', label: 'Work' },
        { href: '/about', label: 'About' },
    ];

    return (
        <motion.nav
            animate={{
                backgroundColor: isDarkSection ? '#050505' : 'rgba(255,255,255,0.85)',
                borderColor: isDarkSection ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md border-b"
            style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderColor: 'rgba(0,0,0,0.06)' }}
        >
            <Link href="/">
                <div className="relative h-10 w-[180px] md:w-[220px]">
                    <Image
                        src="/MainLogo.webp"
                        alt="hASolutions — Stories by Kamau Wamuiga"
                        fill
                        className={cn("object-contain object-left transition-opacity duration-400", isDarkSection ? 'opacity-0' : 'opacity-100')}
                        priority
                    />
                    <Image
                        src="/MainLogo-white.webp"
                        alt="hASolutions — Stories by Kamau Wamuiga"
                        fill
                        className={cn("object-contain object-left transition-opacity duration-400", isDarkSection ? 'opacity-100' : 'opacity-0')}
                        priority
                    />
                </div>
            </Link>

            <div className="flex gap-8">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative font-sans text-sm uppercase tracking-widest transition-colors",
                                isDarkSection
                                    ? "text-white/60 hover:text-white"
                                    : "text-muted-foreground hover:text-foreground",
                                isActive && (isDarkSection ? "text-white" : "text-foreground")
                            )}
                        >
                            {link.label}
                            {isActive && (
                                <motion.div
                                    layoutId="nav-active"
                                    className={cn("absolute -bottom-1 left-0 right-0 h-px", isDarkSection ? "bg-white" : "bg-primary")}
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}

