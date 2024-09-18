import React from 'react'
import { Link } from 'react-router-dom'
import '../globalStyle.css';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const selectedItem = useSelector((state) => state.product.cart);
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <span className='logo'>REDUX STORE</span>
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink' to="/cart">Cart</Link>

            <span className='cartCount'>
                Cart Items : {selectedItem.length}
            </span>

        </div>
    </div>
  )
}

export default NavBar