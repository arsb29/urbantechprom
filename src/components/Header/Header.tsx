'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '@/assets/logo.svg';
import {WithCorners} from "@/components/WithCorners/WithCorners";
import { ContactModal } from '@/components/ContactModal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.titleWithLogo}>
          <Logo />
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
