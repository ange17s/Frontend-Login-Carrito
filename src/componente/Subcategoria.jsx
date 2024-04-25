import React from 'react'
import './Categoria.css'

function Subcategoria({nom}) {
  return (
    <div className='subCategoria'>
      <h2>{nom}</h2>
    </div>
  )
}

export default Subcategoria