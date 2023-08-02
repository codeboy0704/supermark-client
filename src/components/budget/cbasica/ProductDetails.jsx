import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import getNearestEstablishmentsInfo from './services/getProductsInformation';
import matchProductsWithEstablishment from './services/matchProductWithEstablishment';
import ProductDetailsContext from '../../../context/ProductDetailsContext';
import LocationInfoContext from '../../../context/LocationInfoContext';
import EstablishmentList from './Establishment';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProductDetails({ setProductDetails }) {
  const currentPath = useLocation();
  const locationInfo = useContext(LocationInfoContext);
  const productDetails = useContext(ProductDetailsContext);
  const id = currentPath.pathname.split(':').pop()
  const [establishments, setEstablishments] = useState([]);
  const [matchPrices, setMatchPrices] = useState([]);
  const [image, setImage] = useState([])

  const getImage = async () => {
    try {
      const res = await axios.get('/api/image/sal')
      console.log(res.data.data.data)
      const base64Img = btoa(
        new Uint8Array(res.data.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      setImage(`data:${res.headers['content-type']};base64,${base64Img}`)
    } catch (e) {
      console.error(e)
    }
  }

  const getProductDetails = async () => {
    try {
      const res = await axios.post('/api/product/get/one', { id: id })
      setProductDetails(res.data.data)

    } catch (e) {
      console.error(e)
    }
  }


  useLayoutEffect(() => {
    if (!productDetails.length) {
      let details = getProductDetails();
    }
    getNearestEstablishmentsInfo({ setEstablishments, locationInfo })
  }, [locationInfo])


  useEffect(() => {
    let match = matchProductsWithEstablishment({ establishments: establishments, product: productDetails })
    setMatchPrices(match);
    getImage()
    console.log(productDetails)
  }, [establishments, productDetails])

  return (
    <div className='product_details_cont'>
      <div className='primal_info'>
        <h1>{productDetails.name}</h1>
        <picture>
          <img src={image} alt="sal" />
        </picture>
      </div>
      {/* <h2 className='best_prices_title' style={{textAlign: "left"}}>Mejores precios:</h2> */}
      <EstablishmentList establishments={matchPrices} />
    </div>
  )
}

export default ProductDetails