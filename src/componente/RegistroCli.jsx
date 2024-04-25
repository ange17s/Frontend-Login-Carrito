import React, { useState } from 'react'
import '../componente/FormularioLog.css'


function RegistroCli() {


    const[identificacion, setIdentificacion] = useState('')
    const[nombre_cliente, setNombre_cliente] = useState('')
    const[direccion, setDireccion] = useState('')
    const[pais_pk, setPais_pk] = useState('')
    const[telefono, setTelefono] = useState('')
    const[correo, setCorreo] = useState('')
    const[representante_pk, setRepresentante_pk] = useState('')
    const[error, setError] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()
    
        if(identificacion == ""|| nombre_cliente == ""||pais_pk==""||representante_pk==""||direccion==""||telefono==""||correo==""){
          setError(true)
          return
        }
        setError(false)
      }



  return (
    <>

    <section>
      <h2> Registrar Cliente</h2>

      <form className='formulario' onSubmit={handleSubmit}>
        <label htmlFor='identificacion'>Identificacion</label>
        <input type='number' id='identificacion' value={identificacion} onChange={e => setIdentificacion(e.target.value)}/>

        <label htmlFor='nombre_cliente'>Nombre</label>
        <input type='text' id='nombre_cliente' value={nombre_cliente} onChange={e => setNombre_cliente(e.target.value)}/>

        <label htmlFor='direccion'>Direccion</label>
        <input type='text' id='direccion' value={direccion} onChange={e => setDireccion(e.target.value)}/>

        <label htmlFor='pais_pk'>Codigo Pais</label>
        <input type='text' id='pais_pk' value={pais_pk} onChange={e => setPais_pk(e.target.value)}/>

        <label htmlFor='telefono'>Telefono</label>
        <input type='text' id='telefono' value={telefono} onChange={e => setTelefono(e.target.value)}/>

        <label htmlFor='correo'>Correo</label>
        <input type='text' id='correo' value={correo} onChange={e => setCorreo(e.target.value)}/>

        <label htmlFor='representante_pk'>Codigo representante</label>
        <input type='number' id='representante_pk' value={representante_pk} onChange={e => setRepresentante_pk(e.target.value)}/>
        <button>Registrar</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
    </>
  )
}

export default RegistroCli