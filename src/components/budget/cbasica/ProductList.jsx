import redirect from '../../../utils/redirect'
import { useNavigate } from 'react-router-dom'
import mockImg from "../../../images/budget/canasta_basica/test.jpeg"
function ProductList({ arr, setProductDetails }) {
  const navigate = useNavigate()
  let mapped = arr.map(el => {
    return (
      <div key={el._id} className='product_card'>
        <button onClick={() => {
          //  let details = getProductDetails( el._id)
          setProductDetails(el)
          redirect(`/budget/pla/cbasica:${el._id}`, navigate)
        }} className='product_main'>
          <div className='title_cont'>
            <h2>{el.name}</h2>
          </div>
          <div>
            <img src={mockImg} alt={el.name} />
          </div>
        </button>

      </div>
    )
  })
  return mapped
}

export default ProductList