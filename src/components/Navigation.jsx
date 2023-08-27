import React from 'react'
import { useNavigate } from 'react-router-dom'
import Forward from "../../src/images/navigation/next.png"
import Back from "../../src/images/navigation/back.png"
function Navigation() {
    const navigate = useNavigate();
    return (
        <div className='navigation_container'>
            <button onClick={() => {
                navigate(-1)
            }} className='navigation_btn'>
                <img src={Back} />
            </button>
            <button onClick={() => {
                navigate(1)
            }} className='navigation_btn'>
                <img src={Forward} />
            </button>
        </div>
    )
}

export default Navigation