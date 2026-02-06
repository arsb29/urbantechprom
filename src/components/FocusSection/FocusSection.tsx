'use client';

import styles from './FocusSection.module.css';
import Logo from '@/assets/corner.svg';
import vectors from '@/assets/vectors.png';
import {Icon} from "@/components/Icon/Icon";
import Image from "next/image";
import {useBackgroundParallax} from "@/hooks";

export function FocusSection() {
  const { ref: titleRef } = useBackgroundParallax<HTMLHeadingElement>(0.1);
  const { ref: listRef } = useBackgroundParallax<HTMLDivElement>(0.1);
  const { ref: imageRef } = useBackgroundParallax<HTMLDivElement>(0.1);

  return (
    <div className={styles.container} data-theme="light">
      <h2 ref={titleRef} className={styles.title}>Фокус компании</h2>
      <div ref={listRef} className={styles.list}>
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
      <div ref={imageRef} className={styles.imageWrapper}>
        <Image src={vectors} alt="" className={styles.image} />
      </div>
    </div>
  );
}
