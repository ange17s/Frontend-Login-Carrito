import React from 'react'
import './Filtros.css'

function Filtros({cambiarFiltros}) {

  const handleChangeCategoria = (event) => {
    cambiarFiltros(prevState => ({...prevState, nombre_categoria: event.target.value}));
  }

  const handleChangeSubCategoria = (event) => {
    cambiarFiltros(prevState => ({...prevState, nombre_subcategoria: event.target.value}));
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor='nombre_categoria'>Categoría</label>
        <select id='nombre_categoria' onChange={handleChangeCategoria} >
          <option value='all'>Todas</option>
          <option value='Nutrición'>Nutrición</option>
          <option value='Belleza'>Belleza</option>
          <option value='Hogar'>Hogar</option>
          <option value='Cuidado Personal'>Cuidado Personal</option>
        </select>
      </div>

      <div>
        <label htmlFor='nombre_subcategoria'>Sub Categoría</label>
        <select id='nombre_subcategoria' onChange={handleChangeSubCategoria} >
          <option value='all'>Todas</option>
          <option value='Snacks'>Snacks</option>
          <option value='Suplementos'>Suplementos</option>
          <option value='Cuidado Solar'>Cuidado Solar</option>
          <option value='Maquillaje'>Maquillaje</option>
          <option value='Lavanderia'>Lavanderia</option>
          <option value='Desinfectantes'>Desinfectantes</option>
          <option value='Cuidado de la piel'>Cuidado de la piel</option>
          <option value='Aseo personal'>Aseo personal</option>
        </select>
      </div>

    </section>

  )
}

export default Filtros