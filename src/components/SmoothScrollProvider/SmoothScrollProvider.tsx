'use client';

import { useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 5, // Длительность анимации скролла (чем больше, тем медленнее)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Плавное замедление
      touchMultiplier: 1.5, // Множитель для тач-устройств
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
