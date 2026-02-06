'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '@/assets/logo.svg';
import {WithCorners} from "@/components/WithCorners/WithCorners";
import { ContactModal } from '@/components/ContactModal';
import {Icon} from "@/components/Icon/Icon";
import {useIsMobile} from "@/hooks";
import {useHeaderTheme} from "@/contexts/ThemeContext";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const { headerTheme } = useHeaderTheme();

  return (
    <>
      <header className={`${styles.container} ${styles[headerTheme]}`}>
        <div className={styles.titleWithLogo}>
          <Icon component={Logo} size={isMobile ? 18 : 34} color={headerTheme === 'dark' ? '#fff' : '#000'} />
          <span className={styles.title}>УРБАНТЕХПРОМ</span>
        </div>
        <WithCorners color={headerTheme === 'dark' ? 'white' : 'black'}>
          <button
            className={styles.button}
            onClick={() => setIsModalOpen(true)}
          >
            Связаться нами
          </button>
        </WithCorners>
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
