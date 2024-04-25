import { useContext } from "react"
import { CarContext } from "../contexto/carrito"

export const useCart = () =>{
    const context = useContext(CarContext)

    if (context === undefined){
        throw new Error ('useCart must be within a CartProvider')
    }

    return context
}