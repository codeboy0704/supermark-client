import Cookies from "js-cookie";

export default function handleMorphedToken() {
    Cookies.remove('token')
    window.location.href = '/login'
}