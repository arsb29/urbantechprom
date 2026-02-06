'use client';

import styles from './Footer.module.css';
import {WithCorners} from "@/components/WithCorners/WithCorners";
import Logo from '@/assets/logoBlack.svg';
import text from "@/assets/text.png";
import Image from "next/image";
import {Icon} from "@/components/Icon/Icon";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <Icon component={Logo} size={24} />
            <span className={styles.footerLogoText}>УРБАНТЕХПРОМ</span>
          </div>
            <p>ООО &quot;УРБАНТЕХПРОМ&quot;</p>
            <p>Адрес:125167, г.Москва,<br/>ул.Викторенко д.5, стр1</p>
            <p>ОГРН 1111111</p>
            <p>ИНН/КПП<br/>131232423/23131313</p>
        </div>
        <div className={styles.footerContact}>
          <a className={styles.link} href="mailto:info@urbantechprom.ru">info@urbantechprom.ru</a>
        </div>
      </div>

      <WithCorners color="black">
        <div className={styles.footerNotice}>
          Сайт находится в разработке
        </div>
      </WithCorners>

      <div className={styles.hr}></div>

      <div className={styles.footerBrand}>
        <Image src={text} alt="" />
      </div>
    </footer>
  );
}
