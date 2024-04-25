import React from 'react'
import ShowHide from '../componente/ShowHide'
import './Home.css'
import Registrar from './Registrar'
import Producto from './Producto'

function Home({usuario, setUsuario}) {


    const handleLogout = () =>{
        setUsuario([])
    }



return (  
    <main className='home'>
        <h1>NatAmE</h1>
        <div className='usuario'>
        <h3>{usuario}</h3>
        <button onClick={handleLogout}>Cerrar Sesion</button>
        </div>

        <div className='container'>
        <section>
           <ShowHide show='true' opcion='Registrar' vista={<Registrar/>} />

        </section>

        <section>
            <ShowHide show='true' opcion='Productos' vista={<Producto/>} />  
            
        </section>
        </div> 
    </main>
    
)
}

export default Home