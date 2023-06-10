import axios from "axios"; 
 export async function searchUser({ user, setErr, path }) {
    try {
      const req = await axios.post(path, user);
      const res = await req.data;
      document.cookie = `token=${res.token}; max-age=${
        60 * 60
      }; path=/; samesite=strict`;
      if (req.status == 201) {
        window.location.href = "/";
      }
    } catch (e) {
      console.log(e);
      const { message, sta } = e.response.data.error || e.response.data;

      setErr({
        message: message,
        sta: !sta ? { user: false, password: true } : sta,
      });
    }
  }