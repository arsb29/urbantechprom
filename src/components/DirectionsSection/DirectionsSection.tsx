import styles from './DirectionsSection.module.css';

export function DirectionsSection() {
  return (
    <section className={styles.directions}>
      <header className={styles.directionsHeader}>
        <div className={styles.directionsLogo}>
          <span className={styles.directionsLogoIcon}>◎</span>
          <span className={styles.directionsLogoText}>УРБАНТЕХПРОМ</span>
        </div>
        <button className={styles.directionsBtnContact}>Связаться нами</button>
      </header>

      <h2 className={styles.directionsTitle}>Основные направления</h2>

      <div className={styles.directionsGrid}>
        <div className={styles.directionsCard}>
          <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600" alt="Газовые энергоцентры"/>
          <div className={styles.directionsCardOverlay}>
            <span>Создание газовых энергоцентров</span>
          </div>
        </div>
        <div className={`${styles.directionsCard} ${styles.directionsCardLarge}`}>
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" alt="Центры обработки данных"/>
          <div className={styles.directionsCardOverlay}>
            <span>Создание центров обработки данных и<br/>объектов майнинговой инфраструктуры</span>
          </div>
        </div>
        <div className={styles.directionsCard}>
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600" alt="Энергетическое оборудование"/>
          <div className={styles.directionsCardOverlay}>
            <span>Поставка энергетического и вычислительного<br/>оборудывания</span>
          </div>
        </div>
        <div className={styles.directionsCard}>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600" alt="Энергетический девелопмент"/>
          <div className={styles.directionsCardOverlay}>
            <span>Энергетический девелопмент</span>
          </div>
        </div>
      </div>
    </section>
  );
}
