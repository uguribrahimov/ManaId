import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    // Handle error
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState() || { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const cartActions = {
  addToCart,
  removeFromCart,
  updateQuantity,
};
