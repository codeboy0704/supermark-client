import axios from "axios";;

const getProductDetails = async ({ setProductDetails, id }) => {
    try {
        const res = await axios.get(`/api/product/${id}`)
        const data = await res.data.data;
        setProductDetails(data)
    } catch (e) {
        console.error(e)
    }
}

export default getProductDetails