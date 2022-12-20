import { useState } from "react";
import Auth from "../images/auth.svg";
import Completed from "../images/auth_completed.svg";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
  const [img, setImg] = useState(Auth);
  const [passwordType, setPasswordType] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({
    message: "",
    sta: { user: true, password: true },
  });
  const navigate = useNavigate();
  const userInfo = { username: userName, password: password };
  const redirect = () => {
    setImg(Completed);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  async function sendUser(user) {
    try {
      const req = await axios("/api/signup", {
        method: "post",
        data: user,
      });
      const data = await req.data;
      if (req.status == 201) {
        redirect();
      }
    } catch (e) {
      const { message, sta } = e.response.data.error || e.response.data;
      setErr({
        message: message,
        sta: !sta ? { user: false, password: true } : sta,
      });
      console.error(e);
    }
  }

  console.log(err);

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
            style={{ background: !err.sta.user ? "#df7f7f" : null }}
          />

          <div>
            <input
              type={passwordType ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{ background: !err.sta.password ? "#df7f7f" : null }}
            ></input>
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
              saveUser(userInfo);
            }}
          >
            Sign Up
          </button>
        </div>

        <picture>
          <img src={img} alt="sign up" />
        </picture>
      </form>
    </div>
  );
}

export default Form;
