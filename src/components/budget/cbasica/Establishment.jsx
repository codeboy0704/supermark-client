import React from 'react'

function EstablishmentList({ establishments }) {
  const map = establishments.map(establishment => {
    return (
      <div className='establishments_details_cont' key={establishment._id}>
        <div className='key_info'>
          <h2>Establecimiento: {establishment.name}</h2>
          <h2>Precio: {establishment.price}</h2>
          <div>
            <h2>Distancia Aproximada: </h2>
            <h3>200km</h3>
          </div>
        </div>
      </div>
    ) 
  })
  return map
}

export default EstablishmentList