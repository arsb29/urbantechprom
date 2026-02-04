import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <header className={styles.heroHeader}>
        <div className={styles.heroLogo}>
          <span className={styles.heroLogoIcon}>◎</span>
          <span className={styles.heroLogoText}>УРБАНТЕХПРОМ</span>
        </div>
        <button className={styles.heroBtnContact}>Связаться нами</button>
      </header>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1>Корпоративный центр<br/>компетенций <span className={styles.heroHighlight}>ГК &quot;Урбантех&quot;</span></h1>
          <p>Инженерные, инвестиционные и управленческие<br/>
          ресурсы для реализации проектов в сфере<br/>
          создания вычислительных комплексов<br/>
          и объектов газовой генерации</p>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroTurbineIcon}></div>
        </div>
      </div>
    </section>
  );
}
