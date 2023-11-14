import redirect from '../../../utils/redirect'
import { useNavigate } from 'react-router-dom'
import DefaultImage from "../../../images/default.png"
import { useEffect, useState } from 'react';
import getProductImage from './services/getProductImage';
import Loading from '../../Loading';
import ProductDetails from './ProductDetails';
function ProductList({ arr, setProductDetails }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchImages = async () => {
    try {
      const imagePromises = arr.map(async (el) => {
        if (el.image) {
          console.log(`Product: ${el.name}, image: ${el.image}`)
          const image = await getProductImage(el.image);
          return { ...el, image: image ? image : DefaultImage };
        }
        return { ...el, image: DefaultImage }
      })
      const updatedArr = await Promise.all(imagePromises);
      setImages(updatedArr);
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [arr])

  console.log(images)

  let mapped = images.map(el => {
    return (
      <div key={el._id} className='product_card'>
        <button onClick={() => {
          setProductDetails(el)
          redirect(`/budget/pla/cbasica/bylocation/:${el._id}`, navigate)
        }} className='product_main'>
          <div className='title_cont'>
            <h2>{el.name}</h2>
          </div>
          <div>
            <img src={el.image} alt={el.name} />
          </div>
        </button>
      </div>
    )
  })

  if (loading) {
    return <Loading />
  }
  return mapped
}

export default ProductList