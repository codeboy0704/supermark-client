import React from 'react'
import Money from "../../../images/icons_home/money.png"
function SavedMoney() {
    return (
        <div className='benefits_item'>
            <picture>
                <img src={Money} alt="money bag" />
            </picture>
            <div>
                <h3>
                    Ahorra dinero
                </h3>
                <p>
                    Nunca había sido  tan sencillo gastar menos dinero al comprar tus alimentos.
                </p>
            </div>

        </div>
    )
}

export default SavedMoney