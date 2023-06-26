
function EstablishmentList({ establishments }) {
  const map = establishments.map(establishment => {
    return (
      <div className='establishments_details_cont' key={establishment._id}>
        <div className='key_info'>
          <div>
          <h2>Establecimiento:</h2>
          <h3>{establishment.name}</h3>
          </div>
          <div>
            <h2>Precio:</h2>
            <h3>${establishment.price}</h3>
          </div>
          <div>
            <h2>Distancia Aproximada: </h2>
            <h3>200km</h3>
          </div>
        </div>
      </div>
    ) 
  })
  return(
    <div className="establishments_list_cont">
      {map}
    </div>
  )
}

export default EstablishmentList