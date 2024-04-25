import React, { useState } from 'react'

function ShowHide({estado, opcion, vista}) {
    const [show, setShow] = useState(estado)

        const handleClick = () => {
            setShow(!show)
        }


  return (
    <div>
        
        <button onClick={handleClick}>{opcion}</button>
        {show && vista }
    </div>
  )
}

export default ShowHide