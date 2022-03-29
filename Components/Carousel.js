import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Autoplay]);

export default function Carousel({ images, text, isPenthouse }) {
  const maxLength = images.length
  const [place, setPlace] = useState(0)
  const increment = () =>{
     if (place < maxLength - 1){
       setPlace(place + 1)
     }
  }

  const decrement = () =>{
    if (place > 0){
      setPlace(place - 1)
    }
  }

  return (
    <Swiper
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
      className={`flex justify-center items-center relative text-white text-2xl font-semibold ${
        isPenthouse ? "min-h-[34rem]" : "min-h-[26rem]"
      } w-full`}
    >
      <div className={`prev absolute top-1/2 left-8 z-10 cursor-pointer h-8 w-8 flex items-center justify-center rounded-[1000px] px-2 ${place === 0  ? 'bg-[#E5E5E5BF]' :'bg-white'} bg-white `} onClick={decrement}>
        {/* <img
          src={require("../public/icons/arrow.png").default.src}
          alt=""
          className="max-h-[2rem]"
        /> */}
         <svg viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg"  className="[1.5rem] rotate-180 px-[2px]">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.367566 0.365747C-0.121402 0.850098 -0.124762 1.63531 0.370927 2.11966L7.70041 9.29731L7.82989 9.4079C8.3253 9.77637 9.03345 9.73786 9.48321 9.29235C9.72685 9.05101 9.85119 8.73362 9.85119 8.41788C9.85119 8.10 9.04972685 7.78144 9.47985 7.5401L2.15037 0.360788L2.02088 0.250204C1.52547 -0.118271 0.817327 -0.0797567 0.367566 0.365747ZM0.257394 22.1117C-0.12083 22.5978 -0.0806545 23.2946 0.367566 23.7386C0.858214 24.2229 1.65636 24.2246 2.15037 23.7402L13.1866 12.9291L13.2999 12.8024C13.4716 12.5819 13.5579 12.3172 13.5579 12.0513C13.5579 11.7356 13.4336 11.4182 13.19 11.1768C12.6993 10.6908 11.9012 10.6892 11.4072 11.1735L0.370927 21.9846L0.257394 22.1117Z"
            fill={place === 0 ? 'white':'#131212'}
          />
        </svg>
      </div>
      <div className={`next absolute top-1/2 right-8 z-10 cursor-pointer h-8 w-8 flex items-center justify-center rounded-[1000px] ${place === maxLength - 1 ? 'bg-[#E5E5E5BF]' :'bg-white'} px-2 `} onClick={increment}>
        <svg viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[1.5rem] px-[2px]">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.367566 0.365747C-0.121402 0.850098 -0.124762 1.63531 0.370927 2.11966L7.70041 9.29731L7.82989 9.4079C8.3253 9.77637 9.03345 9.73786 9.48321 9.29235C9.72685 9.05101 9.85119 8.73362 9.85119 8.41788C9.85119 8.10 9.04972685 7.78144 9.47985 7.5401L2.15037 0.360788L2.02088 0.250204C1.52547 -0.118271 0.817327 -0.0797567 0.367566 0.365747ZM0.257394 22.1117C-0.12083 22.5978 -0.0806545 23.2946 0.367566 23.7386C0.858214 24.2229 1.65636 24.2246 2.15037 23.7402L13.1866 12.9291L13.2999 12.8024C13.4716 12.5819 13.5579 12.3172 13.5579 12.0513C13.5579 11.7356 13.4336 11.4182 13.19 11.1768C12.6993 10.6908 11.9012 10.6892 11.4072 11.1735L0.370927 21.9846L0.257394 22.1117Z"
            fill={place === maxLength - 1 ? 'white':'#131212'}
          />
        </svg>
        {/* <img
          src={require("../public/icons/arrow.png").default.src}
          alt=""
          className="max-h-[2rem] "
        /> */}
      </div>
      <div
        className={`absolute ${
          isPenthouse ? "w-auto" : "w-full"
        }  bg-black py-4 z-10 top-0 left-0 px-4`}
      >
        {text}
      </div>
      {images.map((image, i) => (
        <SwiperSlide
          key={i}
          className={`${image} bg-cover  ${
            isPenthouse ? "min-h-[34rem] bg-center" : "min-h-[24rem] bg-bottom"
          } `}
        ></SwiperSlide>
      ))}
    </Swiper>
  );
}
