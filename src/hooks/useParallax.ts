'use client';

import { useEffect, useRef, useCallback } from 'react';

// Хук для плавного параллакса с использованием translate3d (GPU-ускорение)
export function useBackgroundParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.1
) {
  const ref = useRef<T>(null);
  const rafId = useRef<number | undefined>(undefined);
  const currentY = useRef(0);
  const targetY = useRef(0);

  const updateTransform = useCallback(() => {
    if (!ref.current) return;

    // Плавная интерполяция (lerp)
    currentY.current += (targetY.current - currentY.current) * 0.08;

    // Применяем translate3d для GPU-ускорения
    ref.current.style.transform = `translate3d(0, ${currentY.current}px, 0)`;

    rafId.current = requestAnimationFrame(updateTransform);
  }, []);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Расчёт параллакса относительно позиции элемента в viewport
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const offset = (elementCenter - viewportCenter) * speed;

    targetY.current = -offset;
  }, [speed]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Устанавливаем начальные стили для GPU-ускорения
    element.style.willChange = 'transform';
    element.style.backfaceVisibility = 'hidden';

    // Запускаем анимационный цикл
    rafId.current = requestAnimationFrame(updateTransform);

    // Обработчик скролла
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Начальный расчёт
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      // Очищаем стили
      if (element) {
        element.style.willChange = '';
        element.style.backfaceVisibility = '';
        element.style.transform = '';
      }
    };
  }, [updateTransform, handleScroll]);

  return { ref };
}
