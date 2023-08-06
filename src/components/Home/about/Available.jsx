import React from 'react'
import A from "../../../images/icons_home/available.png"
function Available() {
    return (
        <div className='benefits_item'>
            <picture>
                <img src={A} alt="disponibilidad" />
            </picture>
            <div>
                <h3>Disponiblidad</h3>
                <p>
                    Nunca había sido tan sencillo conocer en que lugares podrás encontrar los productos de forma más barata
                </p>
            </div>
        </div>
    )
}

export default Available