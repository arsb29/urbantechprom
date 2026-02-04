import styles from './FocusSection.module.css';

export default function FocusSection() {
  return (
    <section className={styles.focus}>
      <header className={styles.focusHeader}>
        <div className={styles.focusLogo}>
          <span className={styles.focusLogoIcon}>◎</span>
          <span className={styles.focusLogoText}>УРБАНТЕХПРОМ</span>
        </div>
        <button className={styles.focusBtnContact}>Связаться нами</button>
      </header>

      <h2 className={styles.focusTitle}>Фокус компании</h2>

      <div className={styles.focusList}>
        <div className={styles.focusItem}>
          <div className={styles.focusCheckbox}></div>
          <p>Повышение инвестиционной эффективности инфраструктурных<br/>вычислительных центров</p>
        </div>
        <div className={styles.focusItem}>
          <div className={styles.focusCheckbox}></div>
          <p>Формирование технологической и финансовой базы для развития<br/>цифровой экономики</p>
        </div>
        <div className={styles.focusItem}>
          <div className={styles.focusCheckbox}></div>
          <p>Сокращение сроков вывода мощностей на рынок</p>
        </div>
      </div>
    </section>
  );
}
