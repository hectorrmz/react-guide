import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';

import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHanlder = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItemHanlder.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
