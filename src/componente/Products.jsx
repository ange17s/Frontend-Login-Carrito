import React from 'react'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon} from './Iconos.jsx'
import { useCart } from '../hooks/useCart.js'


function Products ({ products }) {

  const {addToCart, cart, removeFromCart} = useCart()
  
  const checkProductoInCart = product =>{
    return cart.some (item => item.producto_pk === product.producto_pk)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductoInCart(product)
          
            return (
            <li key={product.producto_pk}>
              <img
              src={product.images}
              alt={product.nombre_producto}
              />
              <div>
                <strong>{product.nombre_producto}</strong> - ${product.precio_producto} COP
              </div>
              <div>
                <button style={{backgroundColor: isProductInCart ? 'red': '#09f'}} 
                onClick={()=> 
                  isProductInCart 
                  ? removeFromCart(product) 
                  : addToCart(product)}>
                     {
                      isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                      }
                </button>
              </div>
            </li>)
          }
        )}
      </ul>
    </main>
  )
}

export default Products