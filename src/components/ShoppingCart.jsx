import { useSelector, useDispatch } from 'react-redux'

import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import './ShoppingCart.scss';
import { removeOneProduct } from '../redux/product';

function ShoppingCart() {
  const qtyProduct = useSelector(state => state.qty.value)

  const productIncart = useSelector(state => state.product)
  const dispatch = useDispatch()

    return(
    <div id="shop-cart">
      <h2 id="title-cart"> My cart</h2>
      <div id="content-cart">
        {productIncart.quantity > 0 ? (
          <>
            <img id="cart-img" src={productIncart.image} alt="shoes img" />
            <p>{productIncart.description}</p>
            <p>{productIncart.price} €</p>
            <p>Qty: {productIncart.quantity}</p>
            <Button color="warning" onClick={() => dispatch(removeOneProduct(qtyProduct))}><DeleteIcon/></Button>
          </>
        ) : (
          <p>Your cart is empty </p>
        ) }

      </div>
    </div>
    );
  }

  
export default ShoppingCart;