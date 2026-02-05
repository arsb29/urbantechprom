'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/Modal';
import styles from './ContactModal.module.css';
import {WithCorners} from "@/components/WithCorners/WithCorners";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EMAIL = 'info@urbantechprom.ru';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка при копировании:', err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <h2 className={styles.title}>{EMAIL}</h2>
        <div className={styles.text}>
          Пожалуйста, напишите нам на электронную почту, мы ответим в течении одного рабочего дня
        </div>
        <WithCorners>
          <button
            className={styles.button}
            onClick={handleCopyEmail}
          >
            {copied ? 'Адрес почты скопирован' : 'Скопировать адрес почты'}
          </button>
        </WithCorners>
      </div>
    </Modal>
  );
}
