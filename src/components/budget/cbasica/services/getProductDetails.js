import axios from "axios";

const getProductDetails = async ({ setProductDetails, id }) => {
    try {
        const res = await axios.post('/api/product/get/by/id', { id: id })
        const data = res.data.data;
        setProductDetails(data)
    } catch (e) {
        console.error(e)
    }
}

export default getProductDetails