import React, { useState } from 'react'
import '../componente/FormularioLog.css'



function RegistroRep() {

    const[genero, setGenero] = useState('')
    const[fecha_nacimiento, setFecha_nacimiento] = useState('')
    const[fecha_contrato, setFecha_contrato] = useState('')
    const[error, setError] = useState(false)
    const[identificacion, setIdentificacion]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
    
        if(representante_pk==""||fecha_contrato==""||telefono==""||region_pk==""){
          setError(true)
          return
        }
        setError(false)
      }


  return (
    <>

    <section>
    <h2> Registrar Representante</h2>

    <form className='formulario' onSubmit={handleSubmit}>
      <label htmlFor='identificacion'>Identificacion</label>
      <input type='text' id='identificacion' value={identificacion} onChange={e => setIdentificacion(e.target.value)}/>

      <label htmlFor='genero'>Genero</label>
      <input type='text' id='genero' value={genero} onChange={e => setGenero(e.target.value)}/>

      <label htmlFor='fecha_nacimiento'>Fecha de nacimiento</label>
      <input type='date' id='fecha_nacimiento' value={fecha_nacimiento} onChange={e => setFecha_nacimiento(e.target.value)}/>

      <label htmlFor='fecha_contrato'>Inicio de contrato</label>
      <input type='date' id='fecha_contrato' value={fecha_contrato} onChange={e => setFecha_contrato(e.target.value)}/>
      
      <button>Registrar</button>
    </form>
    {error && <p>Todos los campos son obligatorios</p>}
  </section>
    </>
  )
}

export default RegistroRep