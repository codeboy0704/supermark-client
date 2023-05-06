import { useNavigate } from "react-router-dom";
import ByBudgetIMG from "../../../images/budget/de_acuerdo_precio/64.svg"
import redirect from "../../../utils/redirect"
function ByBudget() {
const navigate = useNavigate();
  return (
    <button className='by_budget_opt budget_opt' onClick={()=>{
        redirect('/pla/precio', navigate)
    }}>
        <div>
            <h2>Plan de acuerdo a presupuesto</h2>
        </div>
        <div>
            <img src={ByBudgetIMG} alt='presupuesto' />
        </div>
    </button>
  )
}

export default ByBudget