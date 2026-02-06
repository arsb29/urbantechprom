'use client';

import Image from 'next/image';
import styles from './DirectionsSection.module.css';
import geo from "@/assets/geo.png";
import gas from "@/assets/gas.png";
import data from "@/assets/data.png";
import energy from "@/assets/energy.png";
import {WithCorners} from "@/components/WithCorners/WithCorners";
import {useBackgroundParallax} from "@/hooks";

export function DirectionsSection() {
  const { ref: titleRef, style: titleStyle } = useBackgroundParallax<HTMLHeadingElement>();
  const { ref: gridRef, style: gridStyle } = useBackgroundParallax<HTMLDivElement>();

  return (
    <section className={styles.container} data-theme="dark">
      <h2 ref={titleRef} style={titleStyle} className={styles.directionsTitle}>Основные направления</h2>

      <div ref={gridRef} style={gridStyle} className={styles.directionsGrid}>
        <WithCorners>
          <div className={styles.card}>
            <Image src={gas} alt="" />
            <div className={styles.text}>
              Создание газовых энергоцентров
            </div>
          </div>
        </WithCorners>
        <WithCorners>
          <div className={styles.card}>
            <Image src={data} alt="" />
            <div className={styles.text}>
              Создание центров обработки данных и объектов майнинговой инфраструктуры
            </div>
          </div>
        </WithCorners>
        <WithCorners>
          <div className={styles.card}>
            <Image src={energy} alt="" />
            <div className={styles.text}>
              Поставка энергетического и вычислительнонго оборудывания
            </div>
          </div>
        </WithCorners>
        <WithCorners>
          <div className={styles.card}>
            <Image src={geo} alt="" />
            <div className={styles.text}>
              Энергетический девелопмент
            </div>
          </div>
        </WithCorners>
      </div>
    </section>
  );
}
