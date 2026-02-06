'use client';

import styles from './HeroSection.module.css';
import Logo from "@/assets/logo.svg";
import {Icon} from "@/components/Icon/Icon";
import {useIsMobile, useBackgroundParallax} from "@/hooks";

export function HeroSection() {
  const isMobile = useIsMobile();
  const { ref: logoRef, style: logoStyle } = useBackgroundParallax<HTMLDivElement>();
  const { ref: titleRef, style: titleStyle } = useBackgroundParallax<HTMLDivElement>();
  const { ref: lineRef, style: lineStyle } = useBackgroundParallax<HTMLDivElement>();
  const { ref: descRef, style: descStyle } = useBackgroundParallax<HTMLParagraphElement>();

  return (
    <div className={styles.container} data-theme="dark">
      <div
        ref={logoRef}
        className={styles.logoOnBackground}
        style={logoStyle}
      >
        <Icon component={Logo} size={isMobile ? 254 : 372} color="#1F262C" />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 ref={titleRef} style={titleStyle} className={styles.title}>Корпоративный центр компетенций <span className={styles.highlight}>ГК &quot;Урбантех&quot;</span></h1>
          <div className={styles.hr} ref={lineRef} style={lineStyle}></div>
          <p ref={descRef} style={descStyle} className={styles.description}>Инженерные, инвестиционные и управленческие
          ресурсы для реализации проектов в сфере
          создания вычислительных комплексов
          и объектов газовой генерации
          </p>
        </div>
        <Line />
      </div>
    </div>
  );
}


function Line() {
  return (
    <div className={styles.lines}>
      <div className={styles.line}></div>
      <div className={styles.line2}></div>
    </div>
  )
}