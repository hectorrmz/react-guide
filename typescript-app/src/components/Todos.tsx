import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onItemClick: (id: number) => void }> = ({
  items,
  onItemClick,
}) => {
  return (
    <>
      <ul className={styles.todos}>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onClick={onItemClick.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Todos;
