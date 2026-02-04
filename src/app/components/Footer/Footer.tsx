import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoIcon}>◎</span>
            <span className={styles.footerLogoText}>УРБАНТЕХПРОМ</span>
          </div>
          <div className={styles.footerCompanyDetails}>
            <p>ООО &quot;УРБАНТЕХПРОМ&quot;</p>
            <p>Адрес:125167, г.Москва,<br/>ул.Викторенко д.5, стр1</p>
            <p>ОГРН 1111111</p>
            <p>ИНН/КПП<br/>131232423/23131313</p>
          </div>
        </div>
        <div className={styles.footerContact}>
          <a href="mailto:info@urbantechprom.ru">info@urbantechprom.ru</a>
        </div>
      </div>

      <div className={styles.footerNotice}>
        <button className={styles.footerBtnDevelopment}>Сайт находится в разработке</button>
      </div>

      <div className={styles.footerBrand}>
        <span>УРБАНТЕХПРОМ</span>
      </div>
    </footer>
  );
}
