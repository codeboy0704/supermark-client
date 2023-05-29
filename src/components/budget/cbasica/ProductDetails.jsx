import React, { useEffect, useState } from 'react'
import getNearestEstablishmentsInfo from './services/getProductsInformation';
import getProductDetails from './services/getProductDetails';

function ProductDetails({locationInfo, productDetails}) {
const [establishments, setEstablishments] = useState([]);
console.log(productDetails)

useEffect(()=>{
   getNearestEstablishmentsInfo({setEstablishments, locationInfo})
}, [])
console.log(establishments)
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails