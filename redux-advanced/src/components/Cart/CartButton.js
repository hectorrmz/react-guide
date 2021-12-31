import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQty = useSelector((state) => state.cart.totalQty);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
