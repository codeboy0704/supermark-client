import Cookies from "js-cookie";
import redirect from "./redirect";
import { useNavigate } from "react-router-dom";

export default function handleMorphedToken() {
    Cookies.remove('token')
    window.location.href = '/login'
}