import styles from './Header.module.css';
import Logo from '@/assets/logo.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.titleWithLogo}>
        <Logo />
        <span className={styles.title}>УРБАНТЕХПРОМ</span>
      </div>
      <button className={styles.button}>Связаться нами</button>
    </header>
  );
}
