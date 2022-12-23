import React from "react";
import { useState } from "react";
import sendUser from "../utils/sendUser";
import LoginImg from "../images/login.svg";
import { Link } from "react-router-dom";
export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState({
    message: "",
    sta: { user: true, password: true },
  });
  const [passwordType, setPasswordType] = useState(false);

  return (
    <div className="login_container">
      <form style={{ background: "#fff" }}>
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
                color: "#e7e3e3",
                fontSize: "18px",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {err.message}
            </small>
          </div>
          <button
            className="sign_btn"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign In
          </button>
          <p>
            Don't have a account?
            <span>
              <Link to="/signup">Sign Up!</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
