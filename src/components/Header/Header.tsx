'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '@/assets/logo.svg';
import {WithCorners} from "@/components/WithCorners/WithCorners";
import { ContactModal } from '@/components/ContactModal';
import {Icon} from "@/components/Icon/Icon";
import {useIsMobile} from "@/hooks";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile()
  return (
    <>
      <header className={styles.container}>
        <div className={styles.titleWithLogo}>
          <Icon component={Logo} size={isMobile ? 18 : 34} />
          <span className={styles.title}>УРБАНТЕХПРОМ</span>
        </div>
        <WithCorners>
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
