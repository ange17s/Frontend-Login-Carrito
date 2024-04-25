import {products as initialProducts} from '../mocks/products.json'
import Products from '../componente/Products'
import React, { useState } from 'react'
import Header from '../componente/Header'
import {Carrito} from '../componente/Carrito'
import { CarProvider } from '../contexto/carrito'
import Footer from '../componente/Footer'
import {IS_DEVELOPMENT} from './config'

function Producto() {

    const [products] = useState(initialProducts)
    const [filtros, setFiltros] = useState(
        {
            nombre_categoria: 'all',
            nombre_subcategoria: 'all',
        }
    ) 

    const filtroProductos = (products) =>{
        return products.filter(product =>{
            return (
                (
                    filtros.nombre_categoria == 'all' || product.nombre_categoria == filtros.nombre_categoria
                ) &&
                (
                    filtros.nombre_subcategoria == 'all' || product.nombre_subcategoria == filtros.nombre_subcategoria
                )
            )
        })
    }

    const filtradosProductos = filtroProductos(products)

  return (
    <CarProvider>
    <Header cambiarFiltros={setFiltros} />
    <Carrito />
    <Products products={filtradosProductos}/>
    {IS_DEVELOPMENT && <Footer/>}
    </CarProvider>
  )
}

export default Producto