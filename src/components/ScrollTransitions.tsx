'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TextRotate } from '@/components/ui/text-rotate';

// ─── Featured project slides (black section) ────────────────────────────────
const SECTION_PROJECTS = [
    {
        title: 'Yum Honey',
        category: 'Brand & Packaging',
        industry: 'Food & Beverage',
        description: 'A honey brand that needed to feel premium without feeling distant. Built the identity, the packaging, and the story that earns the shelf.',
        src: '/Yum Honey-gif.webm',
        href: '/work/yum-honey',
    },
    {
        title: 'Visualizer EF',
        category: 'Product Design',
        industry: 'Interior Design',
        description: 'Clients were hesitating — not because the form was broken, but because they couldn\'t see the decision clearly. Built a tool that changed that.',
        src: '/Visualizer-gif.webm',
        href: '/work/visualizer-ef',
    },
    {
        title: 'Linaya',
        category: 'Web Design',
        industry: 'Lifestyle',
        description: 'A lifestyle brand that deserved a digital presence as considered as the products it sells. Rebuilt from the ground up.',
        src: '/LINAYA-gif.webm',
        href: '/work/linaya',
    },
    {
        title: 'Bensonic',
        category: 'E-Commerce',
        industry: 'Technology',
        description: 'A tech retailer with a broad catalogue and no online home. Built the platform that made everything discoverable and shoppable.',
        src: '/bsonic-gif.webm',
        href: '/work/bensonic',
    },
];

// ─── Word-by-word text reveal ────────────────────────────────────────────────
function WordReveal({
    text,
    progress,
    start,
    end,
    className = '',
}: {
    text: string;
    progress: any;
    start: number;
    end: number;
    className?: string;
}) {
    const words = text.split(' ');
    return (
        <span className={className}>
            {words.map((word, i) => {
                const wordStart = start + (i / words.length) * (end - start);
                const wordEnd = start + ((i + 1) / words.length) * (end - start);
                return (
                    <Word key={i} word={word} progress={progress} start={wordStart} end={wordEnd} />
                );
            })}
        </span>
    );
}

function Word({
    word,
    progress,
    start,
    end,
}: {
    word: string;
    progress: any;
    start: number;
    end: number;
}) {
    const opacity = useTransform(progress, [start, end], [0.55, 1]);
    const y = useTransform(progress, [start, end], [3, 0]);

    return (
        <motion.span
            style={{ opacity, y }}
            className="inline-block mr-[0.3em] relative"
        >
            {word}
        </motion.span>
    );
}

// ─── Main ScrollTransitions Component ───────────────────────────────────────
export function ScrollTransitions() {
    const containerRef = useRef<HTMLDivElement>(null);

    // ── Detect site-wide dark mode via MutationObserver ──
    const [isDarkMode, setIsDarkMode] = useState(false);
    const isDarkModeRef = useRef(false);
    useEffect(() => {
        const update = () => {
            const dark = document.documentElement.classList.contains('dark');
            setIsDarkMode(dark);
            isDarkModeRef.current = dark;
            // Keep nav in sync when dark mode toggles at rest
            window.dispatchEvent(new CustomEvent('nav-theme', { detail: { dark } }));
        };
        update();
        const observer = new MutationObserver(update);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // ── Notify navbar when entering/leaving the dark section ──
    const lastNavDark = useRef<boolean | null>(null);
    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        // In site-wide dark mode, nav is always dark regardless of scroll position
        const isDark = isDarkModeRef.current || (v >= 0.46 && v <= 0.80);
        if (isDark !== lastNavDark.current) {
            lastNavDark.current = isDark;
            window.dispatchEvent(new CustomEvent('nav-theme', { detail: { dark: isDark } }));
        }
    });

    // ── Background color interpolation ──
    // Fades to transparent at the very end so the StatementBanner beneath shows through
    const bgColor = useTransform(
        scrollYProgress,
        [0, 0.37, 0.44, 0.73, 0.80, 0.92, 1],
        ['#f5f5f5', '#f5eded', '#050505', '#050505', '#f5eded', '#f5f5f5', 'rgba(245,245,245,0)']
    );
    const darkBgColor = useTransform(
        scrollYProgress,
        [0, 0.92, 1],
        ['#0a0a0a', '#0a0a0a', 'rgba(10,10,10,0)']
    );

    // ── Hero section transforms ──
    const heroOpacity = useTransform(scrollYProgress, [0, 0.10, 0.18], [1, 1, 0]);
    const heroPointerEvents = useTransform(heroOpacity, (v: number) => v > 0.05 ? 'auto' : 'none');

    // ── Hero image transforms ──
    const heroImgOpacity = useTransform(scrollYProgress, [0, 0.20, 0.28], [1, 0.6, 0]);

    // ── Intro text section: holds long enough for word reveals to finish before fade-out ──
    const introOpacity = useTransform(scrollYProgress, [0.08, 0.15, 0.37, 0.44], [0, 1, 1, 0]);
    const introPointerEvents = useTransform(introOpacity, (v: number) => v > 0.05 ? 'auto' : 'none');

    // ── Dark section (project slides) — enters after intro is fully gone ──
    const darkContentOpacity = useTransform(scrollYProgress, [0.46, 0.52, 0.73, 0.80], [0, 1, 1, 0]);

    // ── Philosophy section — fades out at 0.95 so bg can go transparent cleanly ──
    const clientsOpacity = useTransform(scrollYProgress, [0.80, 0.86, 0.91, 0.95], [0, 1, 1, 0]);
    const clientsPointerEvents = useTransform(clientsOpacity, (v: number) => v > 0.05 ? 'auto' : 'none');

    // ── Project slides horizontal scroll (4 slides × 100vw each) ──
    const cardScrollX = useTransform(
        scrollYProgress,
        [0.52, 0.73],
        ['0vw', `-${(SECTION_PROJECTS.length - 1) * 100}vw`]
    );

    // ── Foreground text color ──
    const textColor = useTransform(
        scrollYProgress,
        [0, 0.40, 0.46, 0.73, 0.80],
        ['#121212', '#121212', '#fafafa', '#fafafa', '#121212']
    );

    const mutedTextColor = useTransform(
        scrollYProgress,
        [0, 0.40, 0.46, 0.73, 0.80],
        ['#737373', '#737373', '#a3a3a3', '#a3a3a3', '#737373']
    );

    // Scroll indicator
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05, 0.08], [1, 1, 0]);

    // ── Profile pic section transforms (one per section) ──
    const profilePic1Opacity = useTransform(scrollYProgress, [0, 0.10, 0.16], [1, 1, 0]);
    const profilePic2Opacity = useTransform(scrollYProgress, [0.13, 0.17, 0.37, 0.44], [0, 1, 1, 0]);
    const profilePic3Opacity = useTransform(scrollYProgress, [0.46, 0.52, 0.71, 0.78], [0, 1, 1, 0]);
    const profilePic4Opacity = useTransform(scrollYProgress, [0.80, 0.86, 0.91, 0.95], [0, 1, 1, 0]);

    // Profile pic border color for dark/light sections
    const profileBorderColor = useTransform(
        scrollYProgress,
        [0, 0.40, 0.46, 0.73, 0.80],
        ['#e5e5e5', '#e5e5e5', '#3a3a3a', '#3a3a3a', '#e5e5e5']
    );

    // Profile text color synced with section context
    const profileTextColor = useTransform(
        scrollYProgress,
        [0, 0.40, 0.46, 0.73, 0.80],
        ['#333333', '#333333', '#e8e8e8', '#e8e8e8', '#333333']
    );

    // Separator line color
    const separatorColor = useTransform(
        scrollYProgress,
        [0, 0.40, 0.46, 0.73, 0.80],
        ['#d4d4d4', '#d4d4d4', '#3a3a3a', '#3a3a3a', '#d4d4d4']
    );

    // Profile section data
    const profileSections = [
        {
            image: '/profilePic1.webp',
            name: 'Kamau',
            text: 'a product designer and developer who builds tools with purpose.',
            namePrefix: "Hello, I'm ",
            opacity: profilePic1Opacity,
        },
        {
            image: '/profilePic2.webp',
            name: '',
            text: 'I start with the problem underneath the brief.',
            namePrefix: '',
            opacity: profilePic2Opacity,
        },
        {
            image: '/profilePic3.webp',
            name: '',
            text: 'Nairobi-based. Working globally.',
            namePrefix: '',
            opacity: profilePic3Opacity,
        },
        {
            image: '/profilePic4.webp',
            name: '',
            text: 'Available for select projects.',
            namePrefix: '',
            opacity: profilePic4Opacity,
        },
    ];

    // Plain JS string constants — avoids curly-quote encoding issues in JSX attributes
    const txt = {
        s2heading: 'Brands that had a real problem and trusted me to work on it.',
        s2body: 'From Nairobi to the global market I have worked with startups and established brands to design and build digital products that do more than look good. They reduce friction. They earn trust. They open new possibilities the brief did not ask for.',
    };

    return (
        <div ref={containerRef} className="relative" style={{ height: '700vh' }}>
            {/* Sticky viewport container */}
            <motion.div
                className="sticky top-0 z-[20] h-screen w-full overflow-x-hidden"
                style={{ backgroundColor: isDarkMode ? darkBgColor : bgColor }}
            >
                {/* ── PERSISTENT PROFILE PIC ── */}
                <div className="absolute top-20 left-8 md:left-16 z-30" style={{ pointerEvents: 'none' }}>
                    {profileSections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            className="absolute top-0 left-0 flex items-start gap-3"
                            style={{ opacity: section.opacity }}
                        >
                            {/* Avatar — fixed size, always same position */}
                            <motion.div
                                className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2"
                                style={{ borderColor: isDarkMode ? '#3a3a3a' : profileBorderColor }}
                            >
                                <Image
                                    src={section.image}
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                    sizes="44px"
                                />
                            </motion.div>

                            {/* Text — fills 65% of viewport width */}
                            <div className="flex flex-col" style={{ width: '65vw', maxWidth: 'calc(65vw - 60px)' }}>
                                <motion.p
                                    className="text-xs leading-snug"
                                    style={{ color: isDarkMode ? '#e8e8e8' : profileTextColor }}
                                >
                                    {section.namePrefix && (
                                        <span>{section.namePrefix}</span>
                                    )}
                                    {section.name && (
                                        <span className="font-bold">{section.name}</span>
                                    )}
                                    {section.name && ', '}
                                    {section.text}
                                </motion.p>
                                {/* Separator line */}
                                <motion.div
                                    className="mt-2 h-[1px] w-16"
                                    style={{ backgroundColor: isDarkMode ? '#3a3a3a' : separatorColor }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* ━━━ SECTION 1: HERO ━━━ */}
                <motion.div
                    className="absolute inset-0 flex flex-col"
                    style={{ opacity: heroOpacity, pointerEvents: heroPointerEvents }}
                >
                    {/* Hero reel */}
                    <div className="h-[63vh] md:flex-1 flex items-center justify-center px-8 pt-20">
                        <motion.div
                            className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden bg-white shadow-[0_24px_60px_-8px_rgba(0,0,0,0.18)]"
                            style={{ opacity: heroImgOpacity }}
                        >
                            <video
                                src="/as-hero.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Bottom hero text */}
                    <div className="px-8 md:px-16 pb-8 flex items-end justify-between gap-6">
                        <div className="flex-1">
                            <motion.p
                                className="font-mono text-[11px] uppercase tracking-widest mb-2"
                                style={{ color: isDarkMode ? '#a3a3a3' : mutedTextColor }}
                            >
                                Hello, I&apos;m
                            </motion.p>
                            <motion.h1
                                className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-3"
                                style={{ color: isDarkMode ? '#fafafa' : textColor }}
                            >
                                Product Designer
                                <br />
                                &amp; Developer
                            </motion.h1>
                            <div className="flex flex-wrap items-center gap-2 text-lg md:text-2xl font-medium mb-3" style={{ color: 'var(--muted-foreground)' }}>
                                <span>Building</span>
                                <TextRotate
                                    texts={["Decisions", "Experiences", "Systems", "Outcomes"]}
                                    mainClassName="text-foreground font-bold"
                                    staggerFrom="first"
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                    staggerDuration={0.02}
                                    splitLevelClassName="overflow-hidden"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={3000}
                                />
                            </div>
                            <motion.p
                                className="text-sm leading-relaxed max-w-sm"
                                style={{ color: isDarkMode ? '#fafafa' : textColor }}
                            >
                                I&apos;m Kamau Wamuiga. I design and build digital products that help people make better decisions — faster, with more confidence, and less friction. Most of the time, the problem isn&apos;t what it looks like on the surface. I like finding what&apos;s underneath it.
                            </motion.p>
                        </div>
                        <motion.p
                            className="font-mono text-[10px] uppercase tracking-widest text-right hidden md:block flex-shrink-0 opacity-60"
                            style={{ color: isDarkMode ? '#a3a3a3' : mutedTextColor }}
                        >
                            Available for
                            <br />
                            select projects &mdash; 2026
                        </motion.p>
                    </div>
                </motion.div>

                {/* SECTION 2: WHO TRUSTED HIM */}
                <motion.div
                    className={'absolute inset-0 flex flex-col justify-center px-8 md:px-16 pt-24 pb-12'}
                    style={{ opacity: introOpacity, pointerEvents: introPointerEvents }}
                >
                    <div className={'max-w-3xl mb-8'}>
                        <motion.p
                            className={'font-mono uppercase tracking-widest mb-6'}
                            style={{ color: isDarkMode ? '#a3a3a3' : mutedTextColor, fontSize: '11px' }}
                        >
                            Selected clients
                        </motion.p>
                        <h2 className={'text-3xl md:text-5xl font-serif font-bold tracking-tight leading-none mb-8'}>
                            <WordReveal
                                text={txt.s2heading}
                                progress={scrollYProgress}
                                start={0.10}
                                end={0.24}
                            />
                        </h2>
                    </div>

                    <div className={'max-w-xl ml-auto'}>
                        <motion.p
                            className={'text-base leading-relaxed'}
                            style={{ color: isDarkMode ? '#fafafa' : textColor }}
                        >
                            <WordReveal
                                text={txt.s2body}
                                progress={scrollYProgress}
                                start={0.22}
                                end={0.35}
                            />
                        </motion.p>
                        <motion.p
                            className={'font-mono uppercase tracking-widest mt-6 leading-loose'}
                            style={{ color: isDarkMode ? '#a3a3a3' : mutedTextColor, fontSize: '11px' }}
                        >
                            Elegant Fittings / Bensonic Tech / Linaya / Jgateri Therapy / Kwetu Nairobi / and more
                        </motion.p>
                    </div>
                </motion.div>

                {/* ━━━ SECTION 3: PROJECT SLIDES — full viewport, black ━━━ */}
                <motion.div
                    className="absolute inset-0 overflow-hidden"
                    style={{ opacity: darkContentOpacity }}
                >
                    <motion.div className="flex h-full" style={{ x: cardScrollX }}>
                        {SECTION_PROJECTS.map((project, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-screen h-full flex flex-col bg-black px-8 md:px-20 pt-36 md:pt-40 pb-6 md:pb-8"
                            >
                                {/* Project label */}
                                <p className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-6">
                                    Project {String(i + 1).padStart(2, '0')}
                                </p>

                                {/* Three-column layout: title | image | tags */}
                                <div className="flex flex-1 items-center gap-6 md:gap-10 min-h-0">

                                    {/* Left: Large title + view link */}
                                    <div className="hidden md:flex w-[26%] flex-shrink-0 flex-col justify-center">
                                        {project.title.split(' ').map((word, wi) => (
                                            <span
                                                key={wi}
                                                className="block text-7xl lg:text-8xl font-bold text-white leading-[0.88] tracking-tight"
                                            >
                                                {word}
                                            </span>
                                        ))}
                                        <Link
                                            href={project.href}
                                            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white/80 transition-colors mt-6 inline-block"
                                        >
                                            View project ↗
                                        </Link>
                                    </div>

                                    {/* Center: Video */}
                                    <div
                                        className="relative flex-1 rounded-2xl overflow-hidden bg-white/5 h-[45vh] md:h-[65vh]"
                                    >
                                        <video
                                            src={project.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Right: Tags + description */}
                                    <div className="hidden md:flex w-[22%] flex-shrink-0 flex-col justify-center gap-0">
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-white border-b border-white/20 pb-2 mb-2">
                                            {project.category}
                                        </p>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-white border-b border-white/20 pb-2 mb-4">
                                            {project.industry}
                                        </p>
                                        <p className="text-white/40 text-xs leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile title + link */}
                                <div className="md:hidden mt-5">
                                    <h3 className="text-4xl font-bold text-white leading-tight tracking-tight">
                                        {project.title}
                                    </h3>
                                    <Link
                                        href={project.href}
                                        className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white/80 transition-colors mt-3 inline-block"
                                    >
                                        View project ↗
                                    </Link>
                                </div>

                                {/* Bottom bar — counter only */}
                                <div className="flex items-center mt-6 pt-4 border-t border-white/10">
                                    <p className="font-mono text-[10px] text-white/30">
                                        [{i + 1} / {SECTION_PROJECTS.length}]
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* SECTION 4: DESIGN ADVANTAGE + PHILOSOPHY */}
                <motion.div
                    className={'absolute inset-0 flex items-start overflow-y-auto px-8 md:px-16 pt-24 md:pt-0 md:items-center'}
                    style={{ opacity: clientsOpacity, pointerEvents: clientsPointerEvents }}
                >
                    <div className={'w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center pb-10 md:pb-0'}>

                        {/* Left: Philosophy */}
                        <div>
                            <motion.p
                                className={'font-mono uppercase tracking-widest mb-4'}
                                style={{ color: isDarkMode ? '#a3a3a3' : mutedTextColor, fontSize: '11px' }}
                            >
                                The design advantage
                            </motion.p>
                            <motion.h2
                                className={'text-3xl md:text-4xl font-serif font-bold tracking-tight leading-tight mb-4 md:mb-6'}
                                style={{ color: isDarkMode ? '#fafafa' : textColor }}
                            >
                                Every pixel has a reason.
                                <br />
                                Every decision, an intent.
                            </motion.h2>
                            <motion.p
                                className={'text-base leading-relaxed mb-5 md:mb-8 max-w-md'}
                                style={{ color: isDarkMode ? '#fafafa' : textColor }}
                            >
                                I try to start every project by asking a simple question: what is the person on the other side of this actually trying to resolve?
                                Not what they are trying to do — what they are trying to resolve. Those are different questions, and they lead to different work.
                                From there the process is straightforward: understand the real problem, design with intention, and ship something that earns trust before anyone has to pitch it.
                            </motion.p>

                            {/* Process steps */}
                            <div className={'flex flex-col gap-4 mb-6 md:mb-8'}>
                                {[
                                    { n: '01', label: '', desc: 'Listen for the problem underneath the brief.' },
                                    { n: '02', label: '', desc: 'Design for what the person needs to resolve, not just complete.' },
                                    { n: '03', label: '', desc: 'Ship work that does the job before anyone has to explain it.' },
                                ].map(({ n, label, desc }) => (
                                    <div key={n} className={'flex items-start gap-4'}>
                                        <motion.span className={'font-mono flex-shrink-0 mt-0.5'} style={{ color: isDarkMode ? '#a3a3a3' : mutedTextColor, fontSize: '11px' }}>{n}</motion.span>
                                        <div>
                                            {label && <motion.span className={'font-mono uppercase tracking-widest'} style={{ color: isDarkMode ? '#fafafa' : textColor, fontSize: '12px' }}>{label} — </motion.span>}
                                            <motion.span className={'text-sm'} style={{ color: isDarkMode ? '#fafafa' : textColor }}>{desc}</motion.span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={'flex flex-col gap-3'}>
                                <Link href="/work">
                                    <motion.span
                                        className={'font-mono uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer'}
                                        style={{ color: isDarkMode ? '#fafafa' : textColor, fontSize: '11px' }}
                                    >
                                        View all work &#8594;
                                    </motion.span>
                                </Link>
                                <a href="mailto:kelvinwamuiga@gmail.com">
                                    <motion.span
                                        className={'font-mono uppercase tracking-widest hover:opacity-70 transition-opacity cursor-pointer'}
                                        style={{ color: isDarkMode ? '#fafafa' : textColor, fontSize: '11px' }}
                                    >
                                        kelvinwamuiga@gmail.com &#8594;
                                    </motion.span>
                                </a>
                            </div>
                        </div>

                        {/* Right: Image — hidden on mobile to prevent overflow */}
                        <div className={'hidden md:block relative aspect-4/3 rounded-sm overflow-hidden shadow-lg'}>
                            <Image
                                src="/about section.webp"
                                alt="Selected work preview"
                                fill
                                className={'object-cover'}
                            />
                        </div>
                    </div>
                </motion.div>


                {/* ── Scroll progress indicator (thin bottom bar) ── */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-foreground/20"
                    style={{
                        width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
                    }}
                />

                {/* ── Skip to work link ── */}
                <motion.div
                    className="absolute bottom-6 right-8 md:right-16"
                    style={{ opacity: scrollIndicatorOpacity }}
                >
                    <Link
                        href="/work"
                        className="font-mono text-[10px] uppercase tracking-widest hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--muted-foreground)' }}
                    >
                        Skip to work →
                    </Link>
                </motion.div>

                {/* ── Initial scroll indicator ── */}
                <motion.div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    style={{ opacity: scrollIndicatorOpacity }}
                >
                    <motion.div
                        className="w-5 h-8 rounded-full border-2 border-foreground/20 flex justify-center pt-1.5"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    >
                        <div className="w-1 h-1.5 rounded-full bg-foreground/40" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
