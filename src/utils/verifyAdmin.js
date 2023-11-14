import axios from "axios";

async function verifyUserToBeAdmin(token) {
    try {
        const req = await axios("/api/admin", {
            method: "GET",
            headers: {
                authorization: token
            }
        })
        if (req.status == 401) {
            return false
        }
        else
            return true
    } catch (e) {
        console.error(e)
    }
}

export default verifyUserToBeAdmin