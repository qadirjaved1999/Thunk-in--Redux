import React from 'react'
import '../globalStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../store/ProductSlice'


const Cart = () => {
  const getCart = useSelector((state) => state.product.cart);
  console.log("==============>>>>>>>>>>>>>>>getCart",getCart)
  const dispatch = useDispatch();

  const removeCartItem = (productId) => {
    console.log("remove item of this id =>", productId)
   dispatch(remove(productId));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
           getCart && getCart.length > 0 ? (
            getCart.map((product) => (
                <div className="cartCard" key={product.id}>
                  <img className='cartImages' src={product.image} alt="" />
                  <h5>{product.title}</h5>
                  <h5>{product.price}</h5>
                  <button onClick={() => removeCartItem(product.id)} className='btn'>Remove</button>
                </div>
               ))
           ) : (
            <h1 className='emptyCart'>Your Cart is Empty</h1>
           )
        }
      </div>
    </div>
  )
}

export default Cart;