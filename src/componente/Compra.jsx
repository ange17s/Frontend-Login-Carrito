import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './Compra.css'

function Compra() {
    const [valor_calificacion, setValorCalificacion] = useState(null)
    const [hover, setHover] = useState(null)
  return (
    <main>
    <div>
        Compra realizada exitosamente
        
    </div>
    <div className='container'>
        {[...Array(5)].map((star, index) =>{
            const currentRating = index + 1
            return(
                <label>
                    <input 
                    type='radio' 
                    name='rating' 
                    value={currentRating}
                    onClick={() => setValorCalificacion(currentRating)}
                    />
                    <FaStar 
                        className='star' 
                        size={20}
                        color= {currentRating <= (hover||valor_calificacion) ? '#ffc107':'#e4e5e9'}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            )  
        })}
        <p>Tu calificacion al representante es {valor_calificacion} </p>
    </div>
    </main>
  )
}

export default Compra