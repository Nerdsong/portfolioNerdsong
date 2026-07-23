'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/providers/I18nProvider';
import { Button } from '@/components/ui/button';
import { SectionReveal } from '@/components/motion/SectionReveal';
import { HudPortrait } from '@/components/sections/HudPortrait';

export function Hero() {
  const { t } = useTranslation();

  return (
    <SectionReveal id="hero" className="flex min-h-[100dvh] flex-col overflow-x-clip py-8 md:py-24 lg:min-h-0 lg:py-[150px]">
      <div className="site-container relative flex flex-1 flex-col lg:min-h-[36rem]">
        <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
          <div
            className="absolute left-[85%] top-38 z-0 w-full max-w-[520px] -translate-x-1/2 translate-y-32 overflow-visible lg:left-auto lg:right-0 lg:top-[32%] lg:w-1/2 lg:max-w-none lg:translate-y-0 lg:-translate-y-1/2 lg:translate-x-0"
          >
            <HudPortrait alt="" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-0 flex-1 flex-col lg:max-w-[48%] lg:flex-none lg:space-y-8">
          <div className="space-y-8">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary md:text-sm">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted md:text-xl">{t('hero.subtitle')}</p>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {t('hero.description')}
            </p>
          </div>

          <div className="absolute left-0 right-0 top-[75%] flex flex-nowrap gap-2 sm:gap-4 lg:relative lg:top-auto lg:mt-0 lg:flex-wrap lg:gap-4">
            <Button asChild size="lg" className="group flex-1 px-3 text-sm sm:flex-none sm:px-8 sm:text-base">
              <Link href="/#projects">
                {t('hero.ctaProjects')}
                <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group flex-1 px-3 text-sm sm:flex-none sm:px-8 sm:text-base">
              <Link href="/#contact">
                {t('hero.ctaContact')}
                <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
