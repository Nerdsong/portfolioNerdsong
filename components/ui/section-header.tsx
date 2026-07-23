import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-2xl space-y-4', className)}>
      <h2 className="text-4xl font-bold md:text-5xl lg:text-[3.25rem]">{title}</h2>
      {subtitle && <p className="text-lg leading-relaxed text-muted md:text-xl">{subtitle}</p>}
    </div>
  );
}
