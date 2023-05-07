import { useNavigate } from "react-router-dom";
import CustomizeIMG from "../../../images/budget/per_group/100.svg"
import redirect from "../../../utils/redirect"

function Customized() {
  const navigate = useNavigate();
  return (
    <button className="customize_opt budget_opt" onClick={()=>{
        redirect("/budget/pla/personalizado", navigate)
    }}>
         <div>
            <h2>Planes Personalizados</h2>
        </div>
        <div>
            <img src={CustomizeIMG } alt='personalizado' />
        </div>
    </button>
  )
}

export default Customized