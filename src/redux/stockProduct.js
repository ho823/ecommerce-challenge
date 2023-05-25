import { createSlice } from '@reduxjs/toolkit'

export const stockProduct = createSlice({
  name: 'counter',
  initialState: {
    value: 20
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  }
})

export const { increment, decrement } = stockProduct.actions

export default stockProduct.reducer