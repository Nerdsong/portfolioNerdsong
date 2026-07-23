'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { useTranslation } from '@/components/providers/I18nProvider';
import { SectionReveal } from '@/components/motion/SectionReveal';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const stats = [
  { key: 'about.stats.years' },
  { key: 'about.stats.solutions' },
  { key: 'about.stats.focus' },
] as const;

const cvFiles = {
  es: '/Nelson Jhoel Adarmes  CV-Esp.pdf',
  en: '/Nelson Jhoel Adarmes  CV-En.pdf',
} as const;

export function About() {
  const { t } = useTranslation();

  return (
    <SectionReveal id="about" className="section-spacing">
      <div className="site-container grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-8">
          <SectionHeader title={t('about.title')} />
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t('about.bio')}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href={encodeURI(cvFiles.es)} download="Nelson-Jhoel-Adarmes-CV-ES.pdf">
                <Download className="h-4 w-4" />
                {t('about.cv.es')}
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={encodeURI(cvFiles.en)} download="Nelson-Jhoel-Adarmes-CV-EN.pdf">
                <Download className="h-4 w-4" />
                {t('about.cv.en')}
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map(({ key }) => (
            <div key={key} className="card-interactive flex min-h-[140px] items-center justify-center p-8">
              <p className="text-center font-display text-lg font-bold md:text-xl">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
