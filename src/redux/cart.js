import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    quantity: 0
  },
  reducers: {
    addShoes: (state, qty) => {
      state.quantity = qty.payload
    },
  }
})

export const { addShoes } = cart.actions

export default cart.reducer