import React, { Component, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './MainBanner.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

SwiperCore.use([ Pagination, Autoplay ]);

export class MainBanner extends Component {
    state = {
        list : []
    };
    getImages = async () => {
        const { data : { list } } = await axios.get('http://localhost:8080/_interface/home/mainpromotion_list.php');
        this.setState({ list })
    }
    componentDidMount(){
        this.getImages();
    }

    render() {
        const url = 'http://test.modeal.net';
        const { list } = this.state;
        const storeImg = list.map((potato) => potato.P_IMG);
        const storeUrl = list.map((potato) => potato.P_MAP);
        console.log(storeUrl)

        const slides = [];
        for(let i = 0; i < 5; ++i){
            console.log(url+storeImg[i])
            slides.push(
                <SwiperSlide key={`banner-${i}`} tag='li'>
                    <Link to="/">
                        <img 
                            src={url + storeImg[i]}
                            alt={`banner ${i}`}
                        />
                    </Link>
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
                // onInit={( swiper ) => console.log('Swiper initialized!', swiper)} // Swiper event의 종류 중 하나이다.
                // onSlideChange={( swiper )=> console.log('swiper index changed to:', swiper.activeIndex)} // Swiper event의 종류 중 하나이다.
                // onReachEnd={()=> console.log('swiper end reached!')} // Swiper event의 종류 중 하나이다.
                // // 추가적인 API event는 홈페이지 참고. 'on'을 반드시 앞에 붙혀야 한다. (react에서만!!)
                >
                    { slides }
                </Swiper>

                {/* {images.map((img, idx) => {
                    return (
                        <Swiper 
                            wrapperTag='ul' 
                            speed={2000}
                            autoplay={{delay: 2000, disableOnInteraction: false}}
                            pagination={{clickable: true}}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            <SwiperSlide key={idx} tag='li'>
                                <img 
                                    src={img.P_IMG}
                                    alt={img.P_TITLE}
                                />
                            </SwiperSlide>
                        </Swiper>
                    )
                })} */}
            </div>
        )
    }
}

export default MainBanner
