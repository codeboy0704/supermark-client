import React from 'react'
import Clock from "../../../images/icons_home/clock.svg"
function SaveTime() {
    return (
        <div className='benefits_item'>
            <picture>
                <img src={Clock} alt="clock" />
            </picture>
            <div>
                <h3>
                    Ahorra tiempo
                </h3>
                <p>
                    Find a good place to buy usually takes a lot of time, but not with us
                </p>
            </div>
        </div>
    )
}

export default SaveTime