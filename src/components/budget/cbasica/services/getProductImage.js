import axios from "axios"

const getProductImage = async (id) => {
    try {
        const res = await axios(`/api/image/${id}`, {
            method: 'GET',
            params: {
                id: id
            },
            responseType: 'arraybuffer'
        })
        const imageBlob = new Blob([res.data], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(imageBlob);
        return imageUrl;
    } catch (e) {
        console.error(e)
    }
}

export default getProductImage