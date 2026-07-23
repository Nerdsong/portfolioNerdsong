'use client';

import { experienceItems, experienceTimeline, type ExperienceItem } from '@/lib/content';
import type { Locale } from '@/lib/i18n';
import { useTranslation } from '@/components/providers/I18nProvider';
import { SectionReveal } from '@/components/motion/SectionReveal';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';

const toneStyles: Record<Exclude<ExperienceItem['tone'], 'focus'>, string> = {
  work: 'bg-primary shadow-[0_0_16px_rgba(255,48,48,0.3)]',
  education: 'bg-primary/75',
  freelance: 'bg-primary/55',
};

const chartColumns = 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]';

function getYearPosition(year: number) {
  const span = experienceTimeline.end - experienceTimeline.start;
  return ((year - experienceTimeline.start) / span) * 100;
}

function getBarMetrics(item: ExperienceItem) {
  const end = item.endYear ?? experienceTimeline.end;
  const span = experienceTimeline.end - experienceTimeline.start;

  const left = ((item.startYear - experienceTimeline.start) / span) * 100;
  const width = ((end - item.startYear) / span) * 100;

  return {
    left: `${left}%`,
    width: `${Math.max(width, 14)}%`,
  };
}

function TimelineStar({ className }: { className?: string }) {
  return (
    <span
      className={cn('absolute top-1/2 -translate-y-1/2 text-[#7EECC7]', className)}
      aria-hidden="true"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-[0_0_10px_rgba(255,255,255,0.95)]"
      >
        <path
          d="M12 2.5 14.6 9.2 21.5 9.6 16.2 14.1 18.1 21 12 17.2 5.9 21 7.8 14.1 2.5 9.6 9.4 9.2 12 2.5Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function TimelineYearLines({ years }: { years: number[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-button" aria-hidden="true">
      {years.map((year) => (
        <div
          key={year}
          className="absolute top-0 bottom-0 w-px bg-white/20"
          style={{ left: `${getYearPosition(year)}%` }}
        />
      ))}
    </div>
  );
}

function formatRange(item: ExperienceItem, currentLabel: string) {
  const endLabel = item.endYear === null ? currentLabel : String(item.endYear);
  return `${item.startYear} — ${endLabel}`;
}

function ExperienceBar({
  item,
  locale,
  range,
  years,
}: {
  item: ExperienceItem;
  locale: Locale;
  range: string;
  years: number[];
}) {
  const metrics = getBarMetrics(item);

  return (
    <div
      className="relative h-5 w-full rounded-button bg-card/40 ring-1 ring-white/5"
      role="img"
      aria-label={`${item.title[locale]}: ${range}`}
    >
      <TimelineYearLines years={years} />

      {item.tone === 'focus' ? (
        <>
          <div
            className="absolute top-1/2 z-10 h-px -translate-y-1/2 bg-primary/50"
            style={{ left: metrics.left, right: '10px' }}
          />
          <TimelineStar className="right-0 z-10" />
        </>
      ) : (
        <div
          className={cn(
            'absolute top-1/2 z-10 h-2 min-w-6 -translate-y-1/2 rounded-full transition-all duration-300',
            'md:group-hover/card:h-2.5 md:group-focus-within/card:h-2.5',
            toneStyles[item.tone],
          )}
          style={metrics}
        />
      )}
    </div>
  );
}

function ExperienceRow({
  item,
  locale,
  currentLabel,
  years,
}: {
  item: ExperienceItem;
  locale: Locale;
  currentLabel: string;
  years: number[];
}) {
  const range = formatRange(item, currentLabel);

  return (
    <article
      tabIndex={0}
      className={cn(
        'group/card card-interactive overflow-hidden p-4 outline-none transition-all duration-300 md:p-5',
        'hover:-translate-y-1 hover:bg-card-hover hover:shadow-glow',
        'focus-visible:ring-2 focus-visible:ring-primary/50',
      )}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="min-w-0 text-lg font-bold text-white">{item.title[locale]}</h3>
          <p className="shrink-0 text-right text-sm font-medium text-white md:text-base">{range}</p>
        </div>

        <div className={cn('grid items-center gap-3', chartColumns)}>
          <div
            className={cn(
              'grid min-w-0 transition-all duration-300 ease-out',
              'grid-rows-[1fr] opacity-100',
              'md:grid-rows-[0fr] md:opacity-0',
              'md:group-hover/card:grid-rows-[1fr] md:group-hover/card:opacity-100',
              'md:group-focus-within/card:grid-rows-[1fr] md:group-focus-within/card:opacity-100',
            )}
          >
            <div className="overflow-hidden">
              <p className="text-sm leading-relaxed text-white">{item.description[locale]}</p>
            </div>
          </div>

          <ExperienceBar item={item} locale={locale} range={range} years={years} />
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  const { t, locale } = useTranslation();
  const years = Array.from(
    { length: experienceTimeline.end - experienceTimeline.start + 1 },
    (_, index) => experienceTimeline.start + index,
  );

  return (
    <SectionReveal id="experience" className="section-spacing">
      <div className="site-container space-y-10">
        <SectionHeader title={t('experience.title')} subtitle={t('experience.subtitle')} />

        <div className={cn('hidden md:grid md:gap-6', chartColumns)}>
          <div />
          <div className="border-b border-white/10 pb-3">
            <div className="flex justify-between text-xs font-medium text-white">
              {years.map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3 md:space-y-4">
          {experienceItems.map((item) => (
            <ExperienceRow
              key={item.id}
              item={item}
              locale={locale}
              currentLabel={t('experience.current')}
              years={years}
            />
          ))}
        </div>

        <p className="text-center text-sm text-white">
          {experienceTimeline.start} — {t('experience.current')}
        </p>
      </div>
    </SectionReveal>
  );
}
