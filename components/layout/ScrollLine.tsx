'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/components/providers/I18nProvider';
import { useActiveSection } from '@/hooks/useActiveSection';
import { sectionIds } from '@/lib/projects';
import { cn } from '@/lib/utils';

export function ScrollLine() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const activeSection = useActiveSection();
  const isHome = pathname === '/';

  const activeIndex = Math.max(0, sectionIds.indexOf(activeSection));
  const progress =
    sectionIds.length > 1 ? (activeIndex / (sectionIds.length - 1)) * 100 : 0;

  return (
    <>
      <aside
        className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block 2xl:left-8"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-start pl-2">
          <div className="absolute bottom-4 left-[5px] top-4 w-px bg-white/10" />
          <div
            className="absolute left-[5px] top-4 w-px origin-top bg-gradient-to-b from-primary/80 to-primary/20 transition-all duration-700 ease-out"
            style={{ height: `calc(${progress}% - 8px)` }}
          />
          {sectionIds.map((id, index) => {
            const isActive = isHome && activeSection === id;
            const isPast = isHome && index <= activeIndex;
            return (
              <div key={id} className="relative flex items-center py-6">
                <Link
                  href={`/#${id}`}
                  className="pointer-events-auto group relative flex items-center"
                  aria-label={t(`scrollLine.${id}`)}
                >
                  {isActive && (
                    <span
                      className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0E6D6]/25 blur-lg"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={cn(
                      'relative z-10 h-2.5 w-2.5 rounded-full border transition-all duration-500',
                      isActive
                        ? 'border-[#F0E6D6] bg-[#F0E6D6] shadow-[0_0_12px_rgba(240,230,214,0.45)]'
                        : isPast
                          ? 'border-primary/60 bg-primary/40'
                          : 'border-primary/40 bg-background group-hover:border-primary group-hover:bg-primary/80',
                    )}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </aside>

      <aside
        className="pointer-events-none fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-navbar/90 px-3 py-2 backdrop-blur-xl xl:hidden"
        aria-label="Section navigation"
      >
        {sectionIds.map((id) => {
          const isActive = isHome && activeSection === id;
          return (
            <Link
              key={id}
              href={`/#${id}`}
              className="pointer-events-auto relative flex items-center justify-center"
              aria-label={t(`scrollLine.${id}`)}
              aria-current={isActive ? 'true' : undefined}
            >
              {isActive && (
                <span
                  className="pointer-events-none absolute h-6 w-6 rounded-full bg-[#F0E6D6]/25 blur-md"
                  aria-hidden="true"
                />
              )}
              <span
                className={cn(
                  'relative z-10 h-2.5 w-2.5 rounded-full border transition-colors',
                  isActive
                    ? 'border-[#F0E6D6] bg-[#F0E6D6] shadow-[0_0_10px_rgba(240,230,214,0.45)]'
                    : 'border-primary/40 bg-background',
                )}
              />
            </Link>
          );
        })}
      </aside>
    </>
  );
}
