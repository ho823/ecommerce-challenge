import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import user  from '../images/user.jpg';

import './DesktopNavigation.scss';

function DesktopNavigation() {
  const cart = useSelector(state => state.product.quantity)
  const hasProduct = cart > 0 ? 'full-cart' : 'empty-cart'
    return(
    <>
      <nav id="nav-bar">
        <ul>
          <li>
            <NavLink id="bar-desktop" className="home-nav" to="/">Sneakers</NavLink>
          </li>
          <li>
            <NavLink to="/collections">Collections</NavLink>
          </li>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink id="shop-cart" to="/cart">
              <ShoppingCartOutlinedIcon color="disabled" fontSize="large" />
              <span className={hasProduct}>{cart}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user">
              <img src={user} alt="user profile" id="user-profile" />
            </NavLink>
          </li> 
        </ul>
        <hr id="line-decoration"/>
      </nav>
    </>);
  }

  
export default DesktopNavigation;