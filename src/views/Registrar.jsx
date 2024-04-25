import React from 'react'
import RegistroCli from '../componente/RegistroCli'
import RegistroRep from '../componente/RegistroRep'
import ShowHide from '../componente/ShowHide'
import './Registrar.css'

function Registrar() {


  return (
    <div className='contenedor'>
        <section>
           <ShowHide show='true' opcion='Cliente' vista={<RegistroCli/>} />

        </section>

        <section>
            <ShowHide show='true' opcion='Representante' vista={<RegistroRep/>} />  
            
        </section>
    </div>
  )
}

export default Registrar