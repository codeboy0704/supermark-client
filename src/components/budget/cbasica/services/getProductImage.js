import axios from "axios"

const getProductImage = async (setImage) => {
    try {
        const res = await axios.get('/api/image/sal')
        const data = res.data.data.data
        const base64Img = btoa(
            new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
        setImage(`data:${res.headers['content-type']};base64,${base64Img}`)
    } catch (e) {
        console.error(e)
    }
}

export default getProductImage