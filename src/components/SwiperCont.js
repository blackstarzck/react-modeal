import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export class SwiperCont extends Component {
    render() {
        const slides = [];
        const image = this.props.src;
        const array = this.props.option;
        const option = array[0];

        image.map((img, index) => {
            slides.push(
                <SwiperSlide key={index}>
                    <a href="">
                        <img src={img.src} alt="사진"/>
                    </a>
                </SwiperSlide>
            )
        })

        return (
            <>
                <Swiper 
                    wrapperTag={option.wrapperTag} 
                    speed={option.speed}
                    autoplay={option.autoplay}
                    loop={option.loop}
                    spaceBetween={option.spaceBetween}
                    slidesPerView={option.slidesPerView}
                    >
                        { slides }
                </Swiper>
            </>
        )
    }
}

export default SwiperCont
