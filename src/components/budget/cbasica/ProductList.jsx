import redirect from '../../../utils/redirect'
import { useNavigate } from 'react-router-dom'
const mockImgURL = "data:image/jpeg;base64,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" 
function ProductList({arr}) {
const navigate = useNavigate()
 let mapped = arr.map(el =>{
   return(
 <div key={el._id}>
    <button onClick={()=>{
        redirect(`/budget/pla/cbasica:${el._id}`, navigate)
    }} className='product_main'>
        <div>
            <h2>{el.name}</h2>
        </div>
        <div>
            <img src={mockImgURL} alt={el.name}/>
        </div>
    </button>

 </div>
   )
 })
 return mapped   
}

export default ProductList