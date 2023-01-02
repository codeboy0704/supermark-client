import { useContext, useState } from "react";
import Auth from "../images/auth.svg";
import Completed from "../images/auth_completed.svg";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import sendUser from "../utils/sendUser";
import { UserContext } from "../context/UserContext";

function Form() {
  const [passwordType, setPasswordType] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [familyID, setFamilyID] = useState("");
  const [err, setErr] = useState({
    message: "",
    sta: { user: true, password: true, family: true },
  });

  const navigate = useNavigate();
  const { data } = useContext(UserContext);
  const userInfo = { username: userName, password: password };

  const saveUser = (user) => {
    sendUser({ user, path: "/api/signup", setErr, navigate });
  };
  return (
    <div className="form_container">
      <form>
        <div className="form_txt">
          <h2>Sign Up</h2>
          <div>
            <input
              type="text"
              placeholder="User"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              style={{ background: !err.sta.user ? "#df7f7f" : null }}
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
          <p>
            Don't have an account?
            <span>
              <Link to="/login">Sign In!</Link>
            </span>
          </p>
        </div>

        <picture>
          <img src={Auth} alt="sign up" />
        </picture>
      </form>
    </div>
  );
}

export default Form;
