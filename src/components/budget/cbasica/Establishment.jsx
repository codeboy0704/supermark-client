
function EstablishmentList({ establishments }) {
  const map = establishments.map(establishment => {
    return (
      <div className='establishments_details_cont' key={establishment._id}>
        <div className="key_info">
          <div className="price">
            <h3>${establishment.price}</h3>
          </div>
          <div className="title">
            <h3>{establishment.name}</h3>
          </div>
          <div className="line"></div>
          <div className="distance">
            <h3>200KM</h3>
          </div>
          <div>
            <button>Maps</button>
            <button>Promos</button>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="establishments_list_cont">
      {map}
    </div>
  )
}

export default EstablishmentList