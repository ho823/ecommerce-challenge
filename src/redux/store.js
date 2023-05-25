import { configureStore } from '@reduxjs/toolkit'
import stockProduct from './stockProduct'
import cart from './cart'
import product from './product'
import qtyProduct from './qtyProduct'

export default configureStore({
  reducer: {
    stock: stockProduct,
    cart,
    product,
    qty: qtyProduct,
  }
})