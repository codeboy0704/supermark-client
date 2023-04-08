import MainLogo from "../MainLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import "./budget.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PresentationSlide from "./slides/PresentationSlide";

function Budget() {
  return (
    <div className="budget_section_container">
      <MainLogo />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <PresentationSlide />
        <PresentationSlide />
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Budget;
