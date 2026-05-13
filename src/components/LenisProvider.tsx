'use client';

import { useRef, useEffect } from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { frame, cancelFrame } from 'motion';
import 'lenis/dist/lenis.css';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
