'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number; // Скорость параллакса (0.1 - медленно, 1 - быстро)
  direction?: 'up' | 'down'; // Направление движения
  easing?: boolean; // Включить плавное сглаживание
}

interface ParallaxValue {
  translateY: number;
  opacity: number;
  scale: number;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: ParallaxOptions = {}
) {
  const { speed = 0.5, direction = 'up', easing = true } = options;
  const ref = useRef<T>(null);
  const [value, setValue] = useState<ParallaxValue>({
    translateY: 0,
    opacity: 1,
    scale: 1,
  });
  const rafId = useRef<number | undefined>(undefined);
  const currentValue = useRef<ParallaxValue>({ translateY: 0, opacity: 1, scale: 1 });
  const targetValue = useRef<ParallaxValue>({ translateY: 0, opacity: 1, scale: 1 });

  const lerp = useCallback((start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  }, []);

  const updateParallax = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const windowCenter = windowHeight / 2;

    // Расчёт прогресса (0 в центре экрана, отрицательный выше, положительный ниже)
    const progress = (elementCenter - windowCenter) / windowHeight;

    // Расчёт смещения
    const directionMultiplier = direction === 'up' ? -1 : 1;
    const translateY = progress * speed * 100 * directionMultiplier;

    // Расчёт прозрачности (элемент становится прозрачнее при удалении от центра)
    const opacity = Math.max(0, 1 - Math.abs(progress) * 0.5);

    // Небольшое масштабирование
    const scale = 1 - Math.abs(progress) * 0.05;

    targetValue.current = { translateY, opacity: Math.max(0.3, opacity), scale: Math.max(0.95, scale) };
  }, [speed, direction]);

  const animate = useCallback(() => {
    if (easing) {
      const easingFactor = 0.08;
      currentValue.current = {
        translateY: lerp(currentValue.current.translateY, targetValue.current.translateY, easingFactor),
        opacity: lerp(currentValue.current.opacity, targetValue.current.opacity, easingFactor),
        scale: lerp(currentValue.current.scale, targetValue.current.scale, easingFactor),
      };
    } else {
      currentValue.current = { ...targetValue.current };
    }

    setValue({ ...currentValue.current });
    rafId.current = requestAnimationFrame(animate);
  }, [easing, lerp]);

  useEffect(() => {
    const handleScroll = () => {
      updateParallax();
    };

    updateParallax();
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [updateParallax, animate]);

  const style: React.CSSProperties = {
    transform: `translateY(${value.translateY}px) scale(${value.scale})`,
    opacity: value.opacity,
    willChange: 'transform, opacity',
  };

  return { ref, style, value };
}

// Хук для параллакса фонового элемента
export function useBackgroundParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.1
) {
  const ref = useRef<T>(null);
  const [translateY, setTranslateY] = useState(0);
  const rafId = useRef<number | undefined>(undefined);
  const currentY = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const relativeScroll = scrollY - elementTop;
      targetY.current = relativeScroll * speed;
    };

    const animate = () => {
      currentY.current += (targetY.current - currentY.current) * 0.08;
      setTranslateY(currentY.current);
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [speed]);

  const style: React.CSSProperties = {
    transform: `translateY(${translateY}px)`,
    willChange: 'transform',
  };

  return { ref, style, translateY };
}
