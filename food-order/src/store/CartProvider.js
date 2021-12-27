import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    let updatedItems;
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (itemIndex > -1) {
      updatedItems = [...state.items];

      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        amount: updatedItems[itemIndex].amount + action.item.amount,
      };
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === 'REMOVE') {
    let updatedItems;
    const existingItem = state.items.find((item) => item.id === action.id);
    const updatedAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      const itemIndex = updatedItems.findIndex(
        (item) => item.id === updatedItem.id
      );
      updatedItems[itemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
