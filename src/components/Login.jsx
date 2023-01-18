import { useState } from "react";
import LoginImg from "../images/login.svg";
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import redirect from "../utils/redirect";
import { useEffect } from "react";
function Login() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    message: "",
    sta: { user: true, password: true },
  });
  const [passwordType, setPasswordType] = useState(false);
  const userInfo = { username, password };
  async function searchUser(user) {
    const cookie = document.cookie;
    if (cookie.length) {
      redirect("/", navigate);
      console.log("Heyyy");
    }
    try {
      const req = await axios.post("/api/login", user);
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
  return (
    <div className="login_container">
      <form
        style={{ background: "#fff" }}
        onSubmit={(e) => {
          e.preventDefault();
          searchUser(userInfo);
        }}
      >
        <div className="login_txt">
          {/* <h2>Sign In</h2> */}
          <picture>
            <img src={LoginImg} alt="login img" />
          </picture>
          <div>
            <input
              type="text"
              placeholder="User"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type={passwordType ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <i
              onClick={() => {
                setPasswordType((sta) => !sta);
              }}
              className="bx bx-show bx-sm"
            ></i>
            <small
              style={{
                color: "red",
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {err.message}
            </small>
          </div>
          <button className="sign_btn">Sign In</button>
          <p>
            Don't have an account?
            <span>
              <Link to="/signup">Sign Up!</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
