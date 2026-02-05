import React, { ReactNode } from 'react';
import styles from './Modal.module.css';
import {WithCorners} from "@/components/WithCorners/WithCorners";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <WithCorners>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
          {children}
        </div>
      </WithCorners>
    </div>
  );
}
