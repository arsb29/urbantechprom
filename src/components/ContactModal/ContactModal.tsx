import React from 'react';
import { Modal } from '@/components/Modal';
import styles from './ContactModal.module.css';
import {WithCorners} from "@/components/WithCorners/WithCorners";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <h2 className={styles.title}>info@urbantechprom.ru</h2>
        <div className={styles.text}>
          Пожалуйста, напишите нам на электронную почту, мы ответим в течении одного рабочего дня
        </div>
        <WithCorners>
          <button
            className={styles.button}
          >
            Скопировать адрес почты
          </button>
        </WithCorners>
      </div>
    </Modal>
  );
}
