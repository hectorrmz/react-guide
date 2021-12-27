import React from 'react';
import Input from '../../UI/Input';

import styles from './MealForm.module.css';

const MealItemForm = ({ id }) => {
  const addMealHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={addMealHandler}>
      <Input
        input={{
          id: 'amount' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
        label="Amount"
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
