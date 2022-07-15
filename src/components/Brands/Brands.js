import React from 'react';
import logo1 from '../../images/Adidas.png'
import logo3 from '../../images/Gucci.png'
import logo4 from '../../images/hm-logo.png'
import logo5 from '../../images/Levis.png'
import logo6 from '../../images/Nike-Logo.png'
import logo7 from '../../images/original-samsung.png'
import logo9 from '../../images/Zara-logо.png'

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


const Brands = () => {
    return (
        <div>
            
            <h2 className='text-center mt-5'>Brands</h2> <hr />

            <>
                <Swiper
                    spaceBetween={40}
                    slidesPerView={6}
                    centeredSlides={true}
                    autoplay={{
                        delay: 700,
                        disableOnInteraction: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={logo1} className="img-fluid  " alt="" />
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <img src={logo3} className=" img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo4} className=" img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo5} className="img-fluid " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo6} className=" img-fluid" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo7} className=" img-fluid " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={logo9} className=" img-fluid " alt="" />
                    </SwiperSlide>
                    
                </Swiper>
            </>


        </div>
    );
};

export default Brands;