import ByBudgetIMG from "../../../images/budget/de_acuerdo_precio/64.svg"
function ByBudget() {
  return (
    <button className='by_budget_opt budget_opt'>
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