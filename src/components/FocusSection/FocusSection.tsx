'use client';

import styles from './FocusSection.module.css';
import Logo from '@/assets/corner.svg';
import vectors from '@/assets/vectors.png';
import {Icon} from "@/components/Icon/Icon";
import Image from "next/image";
import {useBackgroundParallax} from "@/hooks";

export function FocusSection() {
  const { ref: titleRef, style: titleStyle } = useBackgroundParallax<HTMLHeadingElement>();
  const { ref: listRef, style: listStyle } = useBackgroundParallax<HTMLDivElement>();
  const { ref: imageRef, style: imageStyle } = useBackgroundParallax<HTMLDivElement>();

  return (
    <div className={styles.container} data-theme="light">
      <h2 ref={titleRef} style={titleStyle} className={styles.title}>Фокус компании</h2>
      <div ref={listRef} style={listStyle} className={styles.list}>
        <div className={styles.row}>
          <Icon component={Logo} size={18} color="black" />
          <div className={styles.description}>Повышение инвестиционной эффективности инфраструктурных вычислительных центров</div>
        </div>
        <div className={styles.hr} />
        <div className={styles.row}>
          <Icon component={Logo} size={18} color="black" />
          <div className={styles.description}>Формирование технологической и финансовой базы для развития цифровой экономики</div>
        </div>
        <div className={styles.hr} />
        <div className={styles.row}>
          <Icon component={Logo} size={18} color="black" />
          <div className={styles.description}>Сокращение сроков вывода мощностей на рынок</div>
        </div>
      </div>
      <div ref={imageRef} style={imageStyle} className={styles.imageWrapper}>
        <Image src={vectors} alt="" className={styles.image} />
      </div>
    </div>
  );
}
