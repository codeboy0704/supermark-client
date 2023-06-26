import axios from "axios";
export default async function logOut() {
  let cookie = document.cookie.replace("token=", "");
  try {
    const req = await axios("/api/logout", {
      method: "DELETE",
      headers: {
        token: cookie,
      },
    });
    const newToken = await req.data.token;
    document.cookie = `token=${newToken}`;
    if (req.status == 201) {
      return (window.location.href = "/");
    } else {
      console.log(req.data.message);
    }
  } catch (e) {
    console.log(e);
  }
}
