import React from "react";
import { SwiperSlide } from "swiper/react";
import Chanchito from "../../../images/budget/urban-piggy-bank-with-money-and-coins.svg";
function PresentationSlide() {
  return (
    <SwiperSlide key={1}>
      <div className="presentation_slide">
        <h2>Bienvenido a My Budget</h2>
        <p>
          Esta sección está destinada a ayudarte a ahorrar dinero y brindarte
          sugerencias al comprar tus alimentos, ¡de una manera fácil y rápida!
        </p>
        <picture>
          <img src={Chanchito} alt="piggy-bank" />
        </picture>
        <div>
          <button>Iniciar</button>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default PresentationSlide;
