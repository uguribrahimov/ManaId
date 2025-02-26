import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './Store/cartSlice';
import { searchReducer } from './Store/SearchSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  },
});

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    // Handle error
  }
};

store.subscribe(() => {
  saveState(store.getState().cart);
});

export default store;
