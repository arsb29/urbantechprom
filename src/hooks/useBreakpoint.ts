'use client';

import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

interface BreakpointValues {
  mobile: number;
  tablet: number;
  desktop: number;
}

const BREAKPOINTS: BreakpointValues = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const getBreakpoint = (): Breakpoint => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.tablet) {
        return 'mobile';
      } else if (width < BREAKPOINTS.desktop) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    };

    setBreakpoint(getBreakpoint());

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Возвращаем 'desktop' до монтирования компонента для правильной SSR
  return isMounted ? breakpoint : 'desktop';
}

export function useIsMobile(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'mobile';
}

export function useIsTablet(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'tablet';
}

export function useIsDesktop(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'desktop';
}
