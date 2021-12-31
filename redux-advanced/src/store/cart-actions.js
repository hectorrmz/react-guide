import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const getCart = async () => {
      const response = await fetch(
        'https://react-http-80271-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw Error();
      }

      return await response.json();
    };

    try {
      const cart = await getCart();
      console.log(cart);
      dispatch(cartActions.replaceCart(cart));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Success!',
          message: 'Fetching cart data failed...',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data...',
      })
    );

    const updateCart = async () => {
      const response = await fetch(
        'https://react-http-80271-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw Error();
      }
    };

    try {
      await updateCart();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfullt cart data...',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Success!',
          message: 'Sending cart data failed...',
        })
      );
    }
  };
};
