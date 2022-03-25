import React, { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

//import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Autoplay, } from "swiper"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Autoplay,])

export default function Carousel({images, text, isPenthouse}) {

  return (
   
  <Swiper
  navigation={{
    prevEl: '.prev',
    nextEl: '.next',
  }}
   className={`flex justify-center items-center relative text-white text-2xl font-semibold ${isPenthouse? 'min-h-[34rem]' :  'min-h-[26rem]'} w-full`}>
       <div className="prev absolute top-1/2 left-8 z-10 cursor-pointer">
          <img src={require('../public/icons/arrow.png').default.src} alt="" className="max-h-[2rem] rotate-180" />
       </div>
       <div className="next absolute top-1/2 right-8 z-10 cursor-pointer">
       <img src={require('../public/icons/arrow.png').default.src} alt="" className="max-h-[2rem] "/>
       </div>
       <div className={`absolute ${isPenthouse? 'w-auto' : 'w-full'}  bg-black py-4 z-10 top-0 left-0 px-4`}>
      {text}
       </div>
       {
           images.map((image, i)=>
            (<SwiperSlide key={i} className={`${image} bg-cover  ${isPenthouse? 'min-h-[34rem] bg-center' :  'min-h-[24rem] bg-bottom'} `}>

            </SwiperSlide>)
           )
       }
  </Swiper>

  )
}
