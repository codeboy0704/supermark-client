import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import redirect from "../../utils/redirect";
import { UserContext } from "../../context/UserContext";
import Main_IMG from "../../images/welcome/credit_card.svg";
import Second_main_img from "../../images/welcome/undraw_savings_re_eq4w.svg";
function FirstTime() {
  const navigate = useNavigate();
  // const userData = useContext(UserContext);
  return (
    <div className="first_time_container">
      <div className="first_time_main">
        <div className="first_time_welcome_text">
          <h2>
            Welcome To WCHEAPER
            {/* {userData ? userData.data.user.name.toUpperCase() : ""} */}
          </h2>
          <p>
            La nueva forma de saber donde es mas combeniente para ti hacer tus
            compras y conocer exactamente que productos tienes en casa y su
            historial de precios.
          </p>
        </div>
        <div className="first_time_img_container">
          <picture className="first">
            <img src={Main_IMG} alt="main" />
          </picture>
          <picture className="second">
            <img src={Second_main_img} alt="main" />
          </picture>
        </div>

        <div className="options_container">
          <button className="purple_one">Get started</button>
          <button
            onClick={() => {
              redirect("/login", navigate);
            }}
            className="white_one"
          >
            Sing In
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstTime;
