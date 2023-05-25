import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../redux/stockProduct';
import { addShoes } from '../redux/cart';
import { updateProduct, removeOne, addOne } from '../redux/product';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './QtyBtn.scss'


function QtyBtn() {
  const productStock = useSelector(state => state.stock.value)
  const productAdded = useSelector(state => state.product)

  const dispatch = useDispatch()

  const isEqualToZero = productAdded.quantity === 0 ? true : false
  const soldOut = productStock === 0 ? true : false

    return(
      <div id="number-content">
      <p id="stock">En Stock : {productStock} pièces</p>
        <div id="qty-btn" className="btn">
          <Button 
            id="removeBtn"
            className="txt-btn"
            onClick={() => {dispatch(increment()); dispatch(removeOne())}}
            disabled={isEqualToZero}
            color="warning">
            -
          </Button>
            <span>{productAdded.quantity}</span>
          <Button
            id="addBtn"
            className="txt-btn"
            onClick={() => {dispatch(decrement()); dispatch(addOne())}}
            disabled={soldOut}
            color="warning">
            +
          </Button>
        </div>
        <div className={`btn ${isEqualToZero ? 'cart-btn-disabled' : 'cart-btn'}`}>
          <Button
            id="btn"
            disabled={isEqualToZero}
            color="warning"
            onClick={() => {dispatch(addShoes(productAdded.quantity)); dispatch(updateProduct(productAdded.quantity))}}>
              <ShoppingCartOutlinedIcon />
              <span>Add to cart</span>
            </Button>
        </div>
      </div>
    );
  }

  
export default QtyBtn;