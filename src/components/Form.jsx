import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Auth from "../images/auth.svg";
import Completed from "../images/auth_completed.svg";
import validation, { userValidation } from "../validations/signUp.validation";
import { saveInLocal } from "../utils/save";
import { useEffect } from "react";
function Form() {
  const [passwordType, setPasswordType] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState({ message: "", sta: true });
  const [passwordError, setPasswordError] = useState({
    message: "",
    sta: true,
  });
  const userInfo = { name: userName, password };
  const redirect = () => {
    validation.inLocal() ? (window.location = "/") : null;
  };
  useEffect(() => {
    redirect();
  }, []);
  const handleUserError = (obj) => {
    return setUserError(obj);
  };

  const handlePasswordError = (obj) => {
    return setPasswordError(obj);
  };

  const sendUser = async (user) => {
    try {
      const req = await axios.post("http://localhost:4000/user", user);
      const res = await req.data;
      return res;
    } catch (e) {
      console.error(e);
    }
  };

  const saveUser = (user) => {
    let userVAl = userValidation({
      user: userName,
      error: userError,
      setError: handleUserError,
    });
    let passVal = validation.passwordValidation({
      password,
      error: passwordError,
      setError: handlePasswordError,
    });

    if (!userVAl.sta || !passVal.sta) {
      return;
    } else {
      sendUser(user);
      saveInLocal(user);
      setUserName("");
      setPassword("");
      redirect();
    }
  };
  return (
    <div className="form_container">
      <form>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="User"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setUserError({ message: "", sta: true });
          }}
          style={{ background: !userError.sta ? "#df7f7f" : null }}
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
            style={{ background: !passwordError.sta ? "#df7f7f" : null }}
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
        <picture>
          <img src={Auth} alt="sign up" />
        </picture>
      </form>
    </div>
  );
}

export default Form;
