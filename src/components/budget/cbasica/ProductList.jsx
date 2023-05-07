import React from 'react'
import redirect from '../../../utils/redirect'
import { useNavigate } from 'react-router-dom'
function ProductList({arr}) {
const navigate = useNavigate()
 let mapped = arr.map(el =>{
   return(
    <button onClick={()=>{
        redirect('/budget/pla/cbasica:id', navigate)
    }} className='product_main'>
        <div>
            <h2>{el.name}</h2>
        </div>
        <div>
            <img src={el.img} alt={el.name}/>
        </div>
    </button>
   )
 })
 return mapped   
}

export default ProductList