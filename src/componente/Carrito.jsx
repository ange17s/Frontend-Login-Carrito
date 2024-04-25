import React, { useId } from 'react'
import {CartIcon, ClearCartIcon} from './Iconos'
import './Carrito.css'
import { useCart } from '../hooks/useCart'
import Compra from './Compra'
import ShowHide from './ShowHide'

export function CartItem ({images, precio_producto, nombre_producto, cantidad, addToCart }){
    return(
        <li>
                <img 
                src={images}
                alt={nombre_producto}/>

                <div>
                    <strong>{nombre_producto}</strong> - ${precio_producto}
                </div>

                <footer>
                    <small >
                        Qty: {cantidad}
                    </small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
    )
}

export function Carrito() {

    const cartCheckboxId = useId()
    const {cart, totalPrice, clearCart, addToCart} = useCart()

  return (
    <>
    <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon/>
    </label>
    <input id={cartCheckboxId} type='checkbox' hidden />

    <aside className='cart'>
        <ul>
            {
                cart.map(product =>(
                    <CartItem
                    key={product.producto_pk}
                    addToCart={() => addToCart(product)} 
                    {...product}
                    />
                ))
            }
        </ul>

        <div>Total: ${totalPrice}</div>

        <button onClick={clearCart} >
            <ClearCartIcon />
        </button>

        <section>
           <ShowHide show='true' opcion='Finalizar Compra' vista={<Compra/>} />

        </section>
    </aside>
    </>
  )
}