'use client';

import Image from 'next/image';
import type { StackItem } from '@/lib/content';
import { alsoWorkedWith, coreStack } from '@/lib/content';
import { useTranslation } from '@/components/providers/I18nProvider';
import { SectionReveal } from '@/components/motion/SectionReveal';
import { SectionHeader } from '@/components/ui/section-header';

function StackCard({ item }: { item: StackItem }) {
  const Icon = item.icon;

  return (
    <div className="card-interactive flex items-center gap-4 p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-button border border-white/10 bg-card-hover">
        {item.iconSrc ? (
          <Image
            src={item.iconSrc}
            alt=""
            width={28}
            height={28}
            className="object-contain"
          />
        ) : (
          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
        )}
      </div>
      <h3 className="text-lg font-bold">{item.name}</h3>
    </div>
  );
}

function StackChip({ item }: { item: StackItem }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-2 rounded-button border border-white/10 bg-card/50 px-4 py-2.5">
      {item.iconSrc ? (
        <Image
          src={item.iconSrc}
          alt=""
          width={18}
          height={18}
          className="object-contain"
        />
      ) : (
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      )}
      <span className="text-sm font-medium">{item.name}</span>
    </div>
  );
}

export function Stack() {
  const { t } = useTranslation();

  return (
    <SectionReveal id="stack" className="section-spacing">
      <div className="site-container space-y-14">
        <SectionHeader title={t('stack.title')} subtitle={t('stack.subtitle')} />

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold md:text-3xl">{t('stack.coreTitle')}</h3>
            <p className="text-muted">{t('stack.coreSubtitle')}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreStack.map((item) => (
              <StackCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold md:text-3xl">{t('stack.alsoTitle')}</h3>
            <p className="text-muted">{t('stack.alsoSubtitle')}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {alsoWorkedWith.map((item) => (
              <StackChip key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
