import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import getNearestEstablishmentsInfo from './services/getProductsInformation';
import matchProductsWithEstablishment from './services/matchProductWithEstablishment';
import ProductDetailsContext from '../../../context/ProductDetailsContext';
import LocationInfoContext from '../../../context/LocationInfoContext';
import EstablishmentList from './Establishment';
import { useLocation } from 'react-router-dom';
import getProductDetails from './services/getProductDetails';
import getProductImage from './services/getProductImage';

function ProductDetails({ setProductDetails }) {
  const currentPath = useLocation();
  const locationInfo = useContext(LocationInfoContext);
  const productDetails = useContext(ProductDetailsContext);
  const id = currentPath.pathname.split(':').pop()
  const [establishments, setEstablishments] = useState([]);
  const [matchPrices, setMatchPrices] = useState([]);
  const [image, setImage] = useState(null)

  const getImageOnReload = async (productDetails) => {
    try {
      let imageID = await productDetails.image
      let image = await getProductImage(imageID)
      setImage(image)
    } catch (e) {
      console.error(e)
    }
  }

  useLayoutEffect(() => {
    if (!productDetails.length) {
      getProductDetails({ setProductDetails: setProductDetails, id: id });
    }
    getNearestEstablishmentsInfo({ setEstablishments, locationInfo })
  }, [locationInfo])


  useEffect(() => {
    getImageOnReload(productDetails)
  }, [productDetails])


  useLayoutEffect(() => {
    let match = matchProductsWithEstablishment({ establishments: establishments, product: productDetails })
    setMatchPrices(match);
  }, [establishments, productDetails])

  return (
    <div className='product_details_cont'>
      <div className='primal_info'>
        <h1>{productDetails.name}</h1>
        <picture>
          <img src={image || null} />
        </picture>
      </div>
      <EstablishmentList establishments={matchPrices} />
    </div>
  )
}

export default ProductDetails