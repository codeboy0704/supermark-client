import React from 'react'
import { useNavigate } from "react-router-dom";
import ByLocation from "../../../images/icons_home/location.png"
import Cheaper from "../../../images/icons_home/price.png"
import redirect from '../../../utils/redirect'
function Opciones() {
    const navigate = useNavigate();
    return (
        <div className='cbasic_options_container'>
            <button onClick={() => {
                redirect('/pla/cbasica/bylocation', navigate)
            }} className='canasta_opt budget_opt'>
                <div>
                </div>
                <h2>En base a mi ubicación</h2>
                <div>
                    <img src={ByLocation} alt='location-icon' />
                </div>
            </button>
            <button onClick={() => {
                redirect('/pla/cbasica/all', navigate)
            }} className='canasta_opt budget_opt'>
                <div>
                </div>
                <h2>La más barata</h2>
                <div>
                    <img src={Cheaper} alt='price-icon' />
                </div>
            </button>
        </div>
    )
}

export default Opciones