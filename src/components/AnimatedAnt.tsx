'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function AnimatedAnt() {
    const antRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay before ant appears (after hero animation)
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(showTimer);
    }, []);

    useEffect(() => {
        if (!isVisible || !antRef.current || !pathRef.current) return;

        const runAnimation = async () => {
            const { animate, svg } = await import('animejs') as any;

            if (antRef.current && pathRef.current) {
                // Animate the ant along the motion path
                animate(antRef.current, {
                    ...svg.motionPath(pathRef.current),
                    ease: 'linear',
                    duration: 15000,
                    loop: true,
                });

                // Draw the path trail
                animate(svg.drawable(pathRef.current), {
                    draw: ['0 0', '0 1'],
                    ease: 'linear',
                    duration: 15000,
                    loop: true,
                });
            }
        };

        runAnimation();
    }, [isVisible]);

    if (!isVisible) return null;

    // A curvy path that spans the bottom of the viewport
    const antPath = "M-50,180 C100,120 200,200 350,150 S500,100 650,160 S800,200 950,140 S1100,100 1250,180 S1400,160 1500,120";

    return (
        <div className="fixed bottom-0 left-0 w-full h-[250px] pointer-events-none z-40 overflow-hidden">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1500 250"
                preserveAspectRatio="xMidYMid slice"
            >
                {/* The motion path - invisible (no stroke) */}
                <path
                    ref={pathRef}
                    d={antPath}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="0"
                />
            </svg>

            {/* Animated Ant - positioned by anime.js motion path */}
            <div
                ref={antRef}
                className="absolute"
                style={{
                    left: 0,
                    top: 0,
                    transformOrigin: 'center center',
                }}
            >
                <Image
                    src="/ant.webp"
                    alt="Ant"
                    width={28}
                    height={28}
                    className="transform -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </div>
    );
}
