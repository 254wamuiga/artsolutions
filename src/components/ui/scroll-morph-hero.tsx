"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "arc";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({
    src,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-muted"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-accent flex flex-col items-center justify-center p-4 border border-border"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-primary uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-accent-foreground">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 20;

// Unsplash Images - Design/Architecture focused
const IMAGES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80",
    "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=80",
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80",
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=300&q=80",
];

export default function ScrollMorphHero() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 50);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence (Automatic) ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 300);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 1500);
        const timer3 = setTimeout(() => setIntroPhase("arc"), 3500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1000,
            y: (Math.random() - 0.5) * 600,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    // --- Parallax Value ---
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeParallax();
        };
    }, [smoothMouseX]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-background overflow-hidden">
            <div className="flex h-full w-full flex-col items-center justify-center">

                {/* Text Content */}
                <div className="absolute z-20 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase !== "scatter" ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-2xl font-medium tracking-tight text-foreground md:text-4xl max-w-3xl"
                    >
                        Building systems that bridge the gap between thought and execution.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase !== "scatter" ? { opacity: 0.6 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-6 text-xs font-bold tracking-[0.2em] text-muted-foreground"
                    >
                        SCROLL DOWN TO EXPLORE
                    </motion.p>
                </div>

                {/* Main Container */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70;
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else if (introPhase === "circle") {
                            const isMobile = containerSize.width < 768;
                            const minDimension = Math.min(containerSize.width, containerSize.height);
                            const circleRadius = Math.min(minDimension * 0.35, 280);
                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;

                            target = {
                                x: Math.cos(circleRad) * circleRadius + parallaxValue * 0.5,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                                scale: isMobile ? 1.2 : 1.4,
                                opacity: 1,
                            };
                        } else {
                            // Arc phase
                            const isMobile = containerSize.width < 768;
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.2);
                            const arcRadius = baseRadius * (isMobile ? 1.2 : 0.9);
                            const arcCenterY = containerSize.height * 0.6 + arcRadius;

                            const spreadAngle = isMobile ? 80 : 100;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            const currentArcAngle = startAngle + (i * step);
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            target = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8,
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                src={src}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase}
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

