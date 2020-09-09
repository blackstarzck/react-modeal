import React from 'react'
import './Price.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function Price() {
    const slides = [];
    
    for(let i = 0; i < 7; ++i){
        slides.push(
        <SwiperSlide key={`slide-${i}`} tag='li'>
            <a href="">
                <img
                    src='car.png'
                    alt={`Slide ${i}`}
                />
            </a>
        </SwiperSlide>
        // slides[slides.length - 1].push(
        //     <SwiperSlide>
        //         <a href="">
        //             <img src="more2.png" alt="더보기"/>
        //         </a>
        //     </SwiperSlide>
        // )  
              
        )
    }
    slides.push(
        <SwiperSlide>
            <a href="">
                <img src="more2.png" alt="더보기"/>
            </a>
        </SwiperSlide>
    )

    return (
        <section className="price">
            <h3>가격대</h3>
            <Swiper
                id='item'
                wrapperTag='ul'
                spaceBetween={30}
                slidesPerView={2.4}
                freeMode= {true}
            >
                {slides}
            </Swiper>
        </section>
    )
}

export default Price
