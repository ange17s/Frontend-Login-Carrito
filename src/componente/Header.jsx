import Filtros from "./Filtros"
import React from 'react'


function Header ({cambiarFiltros}) {
  return (
    <header>
      <h2> Productos 🛒</h2>
      <Filtros cambiarFiltros={cambiarFiltros} />
    </header>
  )
}

export default Header