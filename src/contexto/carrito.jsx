import {React, createContext, useState, useEffect} from 'react'

export const CarContext = createContext()

export function CarProvider ({children}){
    
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        let totalPrice =0
        cart.forEach((product)=>{
            totalPrice += product.precio_producto * product.cantidad
        })
        setTotalPrice(totalPrice)
    }, [cart])

    const addToCart = product =>{
        //si ya esta en el carrito
        const productInCartIndex = cart.findIndex(item => item.producto_pk === product.producto_pk )

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].cantidad +=1
            //totalPrice += product.precio_producto * product.cantidad
            setCart(newCart)
        }else{

        //si el producto no esta en el carrito
        setCart(prevState =>([
            ...prevState,
            {
                ...product,
                cantidad: 1
                
            },
            //totalPrice += product.precio_producto * product.cantidad
        ]) )}
    }

    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.producto_pk != product.producto_pk))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CarContext.Provider value={{cart, addToCart, clearCart, removeFromCart}}>
            {children}
        </CarContext.Provider>
    )
}


