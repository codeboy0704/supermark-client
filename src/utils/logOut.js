import axios from "axios";
import Cookies from "js-cookie";
export default async function logOut() {
  let cookie = Cookies.get('token')
  try {
    const req = await axios("/api/logout", {
      method: "DELETE",
      headers: {
        token: cookie,
      },
    });
    Cookies.remove('token')
    if (req.status == 201) {
      setTimeout(() => {
        window.location.href = '/'
      }, 200)
    } else {
      console.log(req.data.message);
    }
  } catch (e) {
    console.log(e);
  }
}
