import { cn } from '@/lib/utils';

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'rounded-button border border-white/10 bg-card/50 px-3 py-1 text-xs font-medium text-muted',
        className,
      )}
    >
      {children}
    </span>
  );
}
