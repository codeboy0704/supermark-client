import axios from "axios"

const getProductImage = async ({ setImage, id }) => {
    try {
        const res = await axios.get(`/api/image/${id}`)
        const data = await res.data
        const image = data.data.image.data
        const base64Img = btoa(
            new Uint8Array(image).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
        setImage(`data:${res.headers['content-type']};base64,${base64Img}`)
    } catch (e) {
        console.error(e)
    }
}

export default getProductImage