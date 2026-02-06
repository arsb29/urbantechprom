'use client';

import styles from './HeroSection.module.css';
import Logo from "@/assets/logo.svg";
import {Icon} from "@/components/Icon/Icon";
import {useIsMobile} from "@/hooks";

export function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <div className={styles.container} data-theme="dark">
      <div className={styles.logoOnBackground}><Icon component={Logo} size={isMobile ? 254 : 372} color="#1F262C" /></div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h1 className={styles.title}>Корпоративный центр компетенций <span className={styles.highlight}>ГК &quot;Урбантех&quot;</span></h1>
          <div className={styles.hr}></div>
          <p className={styles.description}>Инженерные, инвестиционные и управленческие
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