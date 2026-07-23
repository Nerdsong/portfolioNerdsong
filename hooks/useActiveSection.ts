'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { sectionIds, type SectionId } from '@/lib/projects';

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    if (pathname !== '/') return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return activeSection;
}
