import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(p => p.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    increaseQty: (state, action) => {
      const item = state.products.find(p => p.id === action.payload);
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    decreaseQty: (state, action) => {
      const item = state.products.find(p => p.id === action.payload);

      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },

    removeFromCart: (state, action) => {
      const item = state.products.find(p => p.id === action.payload);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
      }

      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;