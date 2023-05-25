import { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import user  from '../images/user.jpg';

import './MobileNavigation.scss';


function MobileNavigation() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cart = useSelector(state => state.product.quantity)
  const hasProduct = cart > 0 ? 'full-cart' : 'empty-cart'
    return(
    <>
      <nav id="mobile-nav">
        <ul>
          <li>
            <Button onClick={handleClick}>
              <MenuIcon color="disabled" fontSize="large" />
            </Button>
            <Menu
            id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink className="menu-item" to="/collections">Collections</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}><NavLink className="menu-item"  to="/men">Men</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="menu-item" to="/women">Women</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="menu-item" to="/about">About</NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink className="menu-item" to="/contact">Contact</NavLink>
              </MenuItem>
          </Menu>
          </li>
          <li>
            <NavLink className="home-nav" to="/">sneakers</NavLink>
          </li>
          <li id="shop-cart">
            <NavLink to="/cart">
              <ShoppingCartOutlinedIcon color="disabled" fontSize="large" />
              <span className={hasProduct}>{cart}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user">
              <img src={user} alt="user profile" id="user-photo" />
            </NavLink>
          </li> 
        </ul>
      </nav>
    </>
    );
  }

  
export default MobileNavigation;