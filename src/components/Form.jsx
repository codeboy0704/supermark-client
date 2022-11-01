import { useState } from "react";
import Auth from "../images/auth.svg";
import Completed from "../images/auth_completed.svg";
import validation from "../validations/signUp.validation";
function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { userError, setUserError } = useState({ message: "", sta: true });
  const { passwordError, setPasswordError } = useState({
    message: "",
    sta: true,
  });
  const userInfo = { userName, password };
  return (
    <div className="form_cntainer">
      <form>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="User"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="sign_btn">Sign Up</button>
        <picture>
          <img src={Auth} alt="sign up" />
        </picture>
      </form>
    </div>
  );
}

export default Form;
