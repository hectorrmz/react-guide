import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';

import styles from './ErrorModal.module.css';

const BackDrop = ({ onCloseModal }) => (
  <div className={styles.backdrop} onClick={onCloseModal}></div>
);
const ModalOverlay = ({ title, message, onCloseModal }) => (
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
);

const ErrorModal = ({ title, message, onCloseModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onCloseModal={onCloseModal} />,
        document.getElementById('backdrop-portal')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onCloseModal={onCloseModal}
        />,
        document.getElementById('modal-portal')
      )}
    </>
  );
};

export default ErrorModal;
