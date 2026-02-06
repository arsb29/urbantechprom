import styles from './FocusSection.module.css';
import Logo from '@/assets/corner.svg';
import {Icon} from "@/components/Icon/Icon";

export function FocusSection() {
  return (
    <div className={styles.container} data-theme="light">
      <h2 className={styles.title}>Фокус компании</h2>
      <div className={styles.list}>
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
    </div>
  );
}
