import React from 'react'
import './FormularioLog.css'
import { useState } from 'react'

function FormularioLog({setUsuario}) {

  const[user, setUser] = useState('')
  const[contraseña, setContraseña] = useState('')
  const[error, setError] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(user == ""|| contraseña == ""){
      setError(true)
      return
    }
    setError(false)
    setUsuario([user])
  }
 
  return(
    <>

    <section>
      <h1> Iniciar Sesion</h1>

      <form className='formulario' onSubmit={handleSubmit}>
        <input type='text' id='user' value={user} onChange={e => setUser(e.target.value)}/>
        <input type='password' id='contraseña' value={contraseña} onChange={e => setContraseña(e.target.value)}/>
        <button>Ingresar</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
    </>
  )
}

export default FormularioLog