import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './MainBanner.css';

SwiperCore.use([ Pagination, Autoplay ]);

function MainBanner() {
    const slides = [];
    for(let i = 0; i < 5; ++i){
        slides.push(
            <SwiperSlide key={`banner-${i}`} tag='li'>
            <img 
                src='/banner/banner.png'
                alt={`banner ${i}`}
            />
            </SwiperSlide>
        )
    }
    return (
        <div className="main_banner">
            <Swiper 
            // 아래는 props다.
            wrapperTag='ul' 
            // additional import modules을 props에 넣을 때는 소문자로 적어야 한다.
            speed={2000}
            autoplay={{delay: 2000, disableOnInteraction: false}}
            pagination={{clickable: true}}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            onInit={( swiper ) => console.log('Swiper initialized!', swiper)} // Swiper event의 종류 중 하나이다.
            onSlideChange={( swiper )=> console.log('swiper index changed to:', swiper.activeIndex)} // Swiper event의 종류 중 하나이다.
            onReachEnd={()=> console.log('swiper end reached!')} // Swiper event의 종류 중 하나이다.
            // 추가적인 API event는 홈페이지 참고. 'on'을 반드시 앞에 붙혀야 한다. (react에서만!!)
            >
                { slides }
            </Swiper>
        </div>
    )
}

export default MainBanner