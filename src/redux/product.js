import { createSlice } from '@reduxjs/toolkit'
import frontSide  from '../images/nike-front.png'


export const product = createSlice({
  name: 'product',
  initialState: {
    quantity: 0,
    image: "",
    description: "",
    price: 0,
  },
  reducers: {
    updateProduct: (state, qty) => {
        state.quantity = qty.payload
        state.image = frontSide
        state.description = "Spring Limited Edition Sneakers"
        state.price = 100 * state.quantity
    },
    removeOneProduct: (state) => {
      state.quantity -= 1
      state.price = 100 * state.quantity
    },
    addOne: state => {
      state.quantity += 1
    },
    removeOne: state => {
      state.quantity -= 1
    }
  }
})

export const { updateProduct, removeOneProduct, addOne, removeOne } = product.actions

export default product.reducer