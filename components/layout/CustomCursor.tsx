'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(
          target.closest('a, button, [role="button"], input, textarea, label'),
        ),
      );
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [enabled, reducedMotion]);

  if (!enabled || reducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-screen"
      animate={{
        x: position.x - (hovering ? 14 : 8),
        y: position.y - (hovering ? 14 : 8),
        scale: hovering ? 1.8 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      aria-hidden="true"
    >
      <span
        className={cn(
          'block rounded-full bg-primary transition-shadow duration-300',
          hovering
            ? 'h-7 w-7 shadow-[0_0_24px_rgba(255,48,48,0.7)]'
            : 'h-4 w-4 shadow-[0_0_16px_rgba(255,48,48,0.5)]',
        )}
      />
    </motion.div>
  );
}
