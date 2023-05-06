
import { useNavigate } from "react-router-dom";
import CanastaBasica from "../../../images/budget/canasta_basica/64.svg"
import redirect from "../../../utils/redirect"

function Basic() {
    const navigate = useNavigate();
  return (
    <button onClick={() =>{
        redirect('/pla/cbasica', navigate)
    }} className='canasta_opt budget_opt'>
        <div>
            <h2>Canasta Basica</h2>
        </div>
        <div>
            <img src={CanastaBasica} alt='canasta-basica' />
        </div>
    </button>
  )
}

export default Basic