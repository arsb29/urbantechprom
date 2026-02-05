import styles from './Header.module.css';
import Logo from '@/assets/logo.svg';
import {WithCorners} from "@/components/WithCorners/WithCorners";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.titleWithLogo}>
        <Logo />
        <span className={styles.title}>УРБАНТЕХПРОМ</span>
      </div>
      <WithCorners><button className={styles.button}>Связаться нами</button></WithCorners>
    </header>
  );
}
