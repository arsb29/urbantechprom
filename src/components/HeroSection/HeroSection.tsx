import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>Корпоративный центр компетенций <span className={styles.highlight}>ГК &quot;Урбантех&quot;</span></h1>
        <p className={styles.description}>Инженерные, инвестиционные и управленческие
        ресурсы для реализации проектов в сфере
        создания вычислительных комплексов
        и объектов газовой генерации
        </p>
      </div>
    </div>
  );
}
