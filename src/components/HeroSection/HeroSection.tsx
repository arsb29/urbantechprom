import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <div className={styles.container}>
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