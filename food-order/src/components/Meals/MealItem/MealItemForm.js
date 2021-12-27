import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import styles from './MealForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const addMealHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    const amount = +inputAmount;

    if (!inputAmount || amount < 1 || amount > 5) {
      setIsValid(false);
      return;
    }

    onAddToCart(amount);
  };

  return (
    <form className={styles.form} onSubmit={addMealHandler}>
      <Input
        ref={amountInputRef}
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
      {!isValid && <p>Please enter a valid Amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
