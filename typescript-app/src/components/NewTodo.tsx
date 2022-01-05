import React, { useRef } from 'react';

import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddToDo: (text: string) => void }> = ({
  onAddToDo,
}) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = textRef.current!.value;

    if (text.trim().length === 0) {
      return;
    }

    onAddToDo(text);
    textRef.current!.value = '';
  };

  return (
    <form className={styles.form}>
      <label htmlFor="text"></label>
      <input ref={textRef} type="text" id="text" />
      <button onClick={submitHandler}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
