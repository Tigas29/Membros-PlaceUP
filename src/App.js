import "./reset.css";
import React, { useRef, useState } from "react";
import background from "./video/backgroundVideo.mp4";
import Tiago from "./Components/Tiago Santos/index";
import Bruno from "./Components/Bruno Costa/index";
import Larissa from "./Components/Larissa Sousa/index";
import Gabbe from "./Components/Gabbe Lins/index";
import Gustavo from "./Components/Gustavo Pereira/index";
import Igor from "./Components/Igor Santos/index";
import Victor from "./Components/Victor Hugo/index";
import Kayky from "./Components/Kayky Freitas/index";

import { Main } from "./style";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
export default function App() {
  return (
    <>
      <Main>
        {/* background video */}
        <div>
          <video className="VIDEO" autoPlay loop muted>
            <source src={background} type="video/mp4" />
          </video>
        </div>

        {/* Card */}

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Bruno />
          </SwiperSlide>
          <SwiperSlide>
            <Gabbe />
          </SwiperSlide>
          <SwiperSlide>
            <Gustavo />
          </SwiperSlide>
          <SwiperSlide>
            <Igor />
          </SwiperSlide>
          <SwiperSlide>
            <Kayky />
          </SwiperSlide>
          <SwiperSlide>
            <Larissa />
          </SwiperSlide>
          <SwiperSlide>
            <Tiago />
          </SwiperSlide>
          <SwiperSlide>
            <Victor />
          </SwiperSlide>
        </Swiper>
      </Main>
    </>
  );
}
