import axios from "axios"
async function getProductDetails({setProductDetails, id}) {
  const req = await axios.post(`/api/product/get/one/`, {id: id})
  const res = await req.data
  console.log(res)
    setProductDetails(res)
}

export default getProductDetails