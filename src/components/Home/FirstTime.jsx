import React from "react";
import Main_IMG from "../../images/welcome/main.svg";

function FirstTime() {
  return (
    <div className="first_time_container">
      <div className="first_time_main">
        <div className="first_time_welcome_text">
          <h2>Welcome To WCHEAPER</h2>
          <p>
            La nueva forma de saber donde es mas combeniente para ti hacer tus
            compras y conocer exactamente que productos tienes en casa y su
            istorial de precios.
          </p>
        </div>
        <div className="first_time_img_container">
          <picture>
            <img src={Main_IMG} alt="" />
          </picture>
        </div>
        <div className="options_container">
          <button className="purple_one">Get started</button>
          <button className="white_one">Sing In</button>
        </div>
      </div>
    </div>
  );
}

export default FirstTime;
