'use client';

import { useEffect } from 'react';
import { useHeaderTheme } from '@/contexts/ThemeContext';

export function useScrollTheme() {
  const { setHeaderTheme } = useHeaderTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-theme]');

      // Найти секцию, которая находится в верхней части viewport
      Array.from(sections).forEach((section) => {
        const rect = section.getBoundingClientRect();
        const theme = section.getAttribute('data-theme') as 'dark' | 'light';

        // Если секция в верхней части экрана (в пределах 150px от top)
        if (rect.top <= 50 && rect.bottom > 50) {
          setHeaderTheme(theme);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем при монтировании

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setHeaderTheme]);
}
