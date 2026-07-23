'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type HudPortraitProps = {
  alt: string;
};

export function HudPortrait({ alt }: HudPortraitProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full">
      <div
        className="absolute inset-0 scale-90 rounded-full bg-[#F0E6D6]/12 blur-[80px]"
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <div className="h-[105%] w-[105%] rounded-full border border-primary/10" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="h-[92%] w-[92%] rounded-full border border-dashed border-primary/15" />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <div className="h-[78%] w-[78%] rounded-full border border-primary/20" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/60"
            style={{
              top: `${15 + (i * 9) % 70}%`,
              left: `${10 + (i * 13) % 80}%`,
            }}
            animate={
              reducedMotion
                ? undefined
                : {
                    opacity: [0.3, 0.9, 0.3],
                    scale: [1, 1.4, 1],
                  }
            }
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative aspect-square w-full">
        <Image
          src="/images/background-image--3.png"
          alt={alt}
          fill
          className="object-contain drop-shadow-[0_0_60px_rgba(240,230,214,0.2)]"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
