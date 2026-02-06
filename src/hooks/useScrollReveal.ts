'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number; // Процент видимости элемента для срабатывания (0 - 1)
  rootMargin?: string; // CSS margin для observer
  delay?: number; // Задержка анимации в мс
  duration?: number; // Длительность анимации в мс
  direction?: 'up' | 'down' | 'left' | 'right'; // Направление появления
  distance?: number; // Расстояние смещения в пикселях
  once?: boolean; // Анимация только один раз
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0,
    duration = 800,
    direction = 'up',
    distance = 60,
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
            observer.unobserve(element);
          }
        } else if (!once && !hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once, hasAnimated]);

  const getTransform = useCallback(() => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'translateY(0)';
    }
  }, [direction, distance]);

  const style: React.CSSProperties = {
    transform: isVisible ? 'translate(0)' : getTransform(),
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
    willChange: 'transform, opacity',
  };

  return { ref, style, isVisible };
}

// Хук для staggered анимации (последовательное появление элементов)
export function useScrollRevealStagger<T extends HTMLElement = HTMLDivElement>(
  itemCount: number,
  options: ScrollRevealOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    delay = 0,
    duration = 600,
    direction = 'up',
    distance = 40,
    once = true,
  } = options;

  const containerRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const staggerDelay = 100; // Задержка между элементами

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  const getTransform = useCallback(() => {
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'translateY(0)';
    }
  }, [direction, distance]);

  const getItemStyle = useCallback((index: number): React.CSSProperties => {
    const itemDelay = delay + (index * staggerDelay);
    return {
      transform: isVisible ? 'translate(0)' : getTransform(),
      opacity: isVisible ? 1 : 0,
      transition: `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${itemDelay}ms, opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${itemDelay}ms`,
      willChange: 'transform, opacity',
    };
  }, [isVisible, getTransform, delay, duration]);

  return { containerRef, getItemStyle, isVisible };
}
