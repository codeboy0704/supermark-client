import axios from "axios";
import { useState, lazy, useEffect, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../images/login.svg";
// eslint-disable-next-line no-unused-vars
import redirect from "../utils/redirect";
import { searchUser } from "../utils/searchUser";
function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    message: "",
    sta: { user: true, password: true },
  });
  const [passwordType, setPasswordType] = useState(false);
  const userInfo = { username, password };
  return (
    <div className="login_container">
      <form
        style={{ background: "#fff" }}
        onSubmit={(e) => {
          e.preventDefault();
          searchUser({ user: userInfo, path: "/api/login", setErr });
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
              <Link to="/register">Sign Up!</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
