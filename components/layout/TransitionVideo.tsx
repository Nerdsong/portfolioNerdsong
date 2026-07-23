'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function TransitionVideo() {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    const isProjectRoute = pathname.startsWith('/projects/');
    const wasProjectRoute = prevPath.current.startsWith('/projects/');
    const routeChanged = prevPath.current !== pathname;

    if (routeChanged && (isProjectRoute || wasProjectRoute)) {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
      setVisible(true);
      const timeout = setTimeout(() => setVisible(false), 400);
      prevPath.current = pathname;
      return () => clearTimeout(timeout);
    }

    prevPath.current = pathname;
  }, [pathname]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={cn(
        'pointer-events-none fixed inset-0 z-[100] h-full w-full object-cover transition-opacity duration-300',
        visible ? 'opacity-70' : 'opacity-0',
      )}
      aria-hidden="true"
    >
      <source src="/videos/static.mp4" type="video/mp4" />
    </video>
  );
}
