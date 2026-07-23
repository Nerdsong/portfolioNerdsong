import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollLine } from '@/components/layout/ScrollLine';
import { TransitionVideo } from '@/components/layout/TransitionVideo';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { SkipLink } from '@/components/layout/SkipLink';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen custom-cursor-root">
        <SkipLink />
        <div className="pointer-events-none fixed inset-0 text-gradient-bg" aria-hidden="true" />
        <div className="pointer-events-none fixed inset-0 noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <TransitionVideo />
        <ScrollLine />
        <Navbar />
        <main id="main-content" className="relative z-10" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
