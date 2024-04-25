import React from 'react'
import FormularioLog from '../componente/FormularioLog'
import Home from './Home'
import { useState } from 'react'

function Login() {

    const [usuario, setUsuario] = useState([])
  
    return (
      <div className='App'>
        {
          !usuario.length > 0
          ?<FormularioLog  setUsuario={setUsuario}/>
          :<Home usuario={usuario} setUsuario={setUsuario}/>
        }
       
  
      </div>
      
    )
}

export default Login