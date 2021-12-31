import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchData, sendCartData } from './store/cart-actions';

let isInitial = true;

function App() {
  const isCartShown = useSelector((state) => state.ui.isCartShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {notification && <Notification props={notification} />}
      <Layout>
        {isCartShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
