import { useContext, useReducer, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CheckoutForm from './CheckoutForm';
import { defaultForm, formReducer } from './form-reducer';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [formState, dispatchForm] = useReducer(formReducer, defaultForm);
  const [error, setError] = useState();
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderSubmitHandler = () => {
    if (!formState.show) {
      dispatchForm({ type: 'SHOW_FORM' });
      return;
    }

    const user = {
      name: formState.name.value,
      address: formState.address.value,
      city: formState.city.value,
      zipCode: formState.zipCode.value,
    };
    submitOrder(user);
  };

  const submitOrder = async (user) => {
    const response = await fetch(
      'https://react-http-80271-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          orderedItems: cartCtx.items,
        }),
      }
    );

    if (!response.ok) {
      setError('There was an error trying to create the order');
      return;
    }

    dispatchForm({ type: 'CLEAR_FORM' });
    cartCtx.clearCart();
    setOrderSubmitted(true);
  };

  const inputChangeHandler = (field, value) => {
    dispatchForm({ type: 'FIELD_UPDATED', payload: { field, value } });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!orderSubmitted && (
        <div>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {formState.show && (
            <CheckoutForm form={formState} onInputChange={inputChangeHandler} />
          )}
        </div>
      )}

      {orderSubmitted && <p>Your order was submitted Successfully!</p>}

      {error && <p className={classes.error}>{error}</p>}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button
            className={classes.button}
            onClick={orderSubmitHandler}
            disabled={formState.show && !formState.isValid}
          >
            {formState.show ? 'Submit' : 'Order'}
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
