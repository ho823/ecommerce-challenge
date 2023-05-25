import { createSlice } from '@reduxjs/toolkit'

export const qtyProduct = createSlice({
  name: 'qty',
  initialState: {
    value: 0
  },
  reducers: {
    addCart: state => {
      state.value += 1
    },
    removeCart: state => {
      state.value -= 1
    },
  }
})

export const { addCart, removeCart } = qtyProduct.actions

export default qtyProduct.reducer