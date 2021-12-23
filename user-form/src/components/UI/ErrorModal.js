import React from 'react';
import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const ErrorModal = ({ title, message, onCloseModal }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onCloseModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onCloseModal}>Ok</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
