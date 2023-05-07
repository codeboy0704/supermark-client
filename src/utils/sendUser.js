import axios from "axios";
import redirect from "./redirect";

export default async function sendUser({ user, path, setErr, navigate }) {
  try {
    const req = await axios(path, {
      method: "GET",
      data: user,
    });

    if (req.status == 201) {
      redirect("/login", navigate);
    }
  } catch (e) {
    const { message, sta } = e.response.data.error || e.response.data;
    setErr({
      message: message,
      sta: !sta ? { user: false, password: true, email: true } : sta,
    });
    console.error(e);
  }
}
