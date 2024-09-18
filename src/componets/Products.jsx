import React, { useEffect } from 'react'
import { add, productsFetched } from '../store/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../store/ProductSlice'
import { BiLoaderCircle } from "react-icons/bi";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(productsFetched());
  }, [])
  const handelAddProduct = (product) => {
    console.log("Add product in add to cart => ", product)
    //product store in Redux Store
    dispatch(add(product));
  }


  if (status === STATUSES.LOADING) {
    return <h2 className='loader'><BiLoaderCircle /></h2>
  }
  if (status === STATUSES.ERROR) {
    return (
      <div className='not-found'>
        <h2>404 NOT FOUND</h2>
        <h2>Something Went Wrong</h2>
      </div>


    )
  }
  return (
    <div className='productsWrapper'>
      {
        products.map((product) => (
          <div className='cart' key={product.id}>

            <img className='productImages' src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => handelAddProduct(product)} className='btn'>Add to Cart</button>

          </div>
        ))
      }
    </div>
  )
}

export default Products;