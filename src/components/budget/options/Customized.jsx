import CustomizeIMG from "../../../images/budget/per_group/100.svg"

function Customized() {
  return (
    <div className="customize_opt budget_opt">
         <div>
            <h2>Planes Personalizados</h2>
        </div>
        <div>
            <img src={CustomizeIMG } alt='personalizado' />
        </div>
    </div>
  )
}

export default Customized