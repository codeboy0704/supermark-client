import axios from "axios"
import Cookies from "js-cookie"
import handleMorphedToken from "./handleBadToken"
import redirect from "./redirect"

export default async function getUserByToken(token) {
    try {
        const req = await axios('/api/user', {
            method: 'GET',
            headers: {
                authorization: token
            }
        })
        const res = await req.data.data.user
        return res
    } catch (e) {
        if (e.response.status == 401) {
            handleMorphedToken()
        }
        console.log(e)
    }
}