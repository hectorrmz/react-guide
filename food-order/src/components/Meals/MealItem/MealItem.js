import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ name, description, price, id }) => {
  const priceFormat = `$${price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      price,
      name,
      amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFormat}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
