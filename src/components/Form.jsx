import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../images/auth.svg";
import Completed from "../images/auth_completed.svg";
import validation, { userValidation } from "../validations/signUp.validation";
import { saveInLocal } from "../utils/save";
import axios, { Axios } from "axios";
// import { useEffect } from "react";
function Form() {
  const [passwordType, setPasswordType] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState({ message: "", sta: false });
  const [passwordError, setPasswordError] = useState({
    message: "",
    sta: false,
  });

  const userInfo = { username: userName, password: password };
  console.log(userInfo);

  async function sendUser(user) {
    try {
      const req = await axios("/api/signup", {
        method: "post",
        data: user,
      });
      const res = await req.data;
      console.log(res);
    } catch (e) {
      const { message } = e.response.data.error || e.response.data;
      setUserError({ message: message });
      console.error(e);
    }
  }

  const saveUser = (user) => {
    sendUser(user);
  };
  return (
    <div className="form_container">
      <form>
        <div className="form_txt">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="User"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            style={{ background: userError.sta ? "#df7f7f" : null }}
          />
          <small style={{ color: "#fff", fontSize: "15px" }}>
            {userError.message}
          </small>
          <div>
            <input
              type={passwordType ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ background: passwordError.sta ? "#df7f7f" : null }}
            ></input>
            <i
              onClick={() => {
                setPasswordType((sta) => !sta);
              }}
              className="bx bx-show bx-sm"
            ></i>
            <small style={{ color: "#fff", fontSize: "15px" }}>
              {passwordError.message}
            </small>
          </div>
          <button
            className="sign_btn"
            onClick={(e) => {
              e.preventDefault();
              saveUser(userInfo);
            }}
          >
            Sign Up
          </button>
        </div>

        <picture>
          <img src={Auth} alt="sign up" />
        </picture>
      </form>
    </div>
  );
}

export default Form;
