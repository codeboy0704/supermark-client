
import CanastaBasica from "../../../images/budget/canasta_basica/64.svg"

function Basic() {
  return (
    <button className='canasta_opt budget_opt'>
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