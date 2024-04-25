import React from 'react'
import './Categoria.css'
import { Link } from 'react-router-dom'

function Categoria({title, description, ruta}) {
  return (
    <div className='Categoria'>
        <h2>{title}</h2>
        <p>{description}</p>

    </div>
  )
}

export default Categoria