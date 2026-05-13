'use client';

import { ScrollTransitions } from '@/components/ScrollTransitions';
import { StatementBanner } from '@/components/StatementBanner';

export default function Home() {
  return (
    <main className="relative">
      <ScrollTransitions />
      <div style={{ marginTop: '-50vh', position: 'relative', zIndex: 10 }}>
        <StatementBanner />
      </div>
    </main>
  );
}
