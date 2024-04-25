import React from 'react'
import Categoria from '../componente/Categoria'



function Categorias() {



  return (
    <div>
        <div className='container'>
                <Categoria title='Nutrición' description='Los mejores productos naturales para tu salud' />

                <Categoria title='Belleza' description='Productos 100% veganos no testeamos en animales'/>
                <Categoria title='Hogar' description='El medio ambiente en tu hogar'/>
                <Categoria title='Cuidado Personal' description='Cuidate a ti mismo asi como cuidas a la naturaleza'/>
            </div>
    </div>
  )
}

export default Categorias