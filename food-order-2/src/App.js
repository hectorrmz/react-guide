import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const submitOrderHandler = (items) => {
    console.log(items);

    fetch('https://react-http-80271-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify(items[0]),
    });
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onSubmit={submitOrderHandler} hg24 />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
