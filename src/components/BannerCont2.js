import React, { Component } from 'react'
import SwiperCont from './SwiperCont';
import './BannerCont.css';
import TopHeader from './TopHeader';

export class BannerCont2 extends Component {
    state = {
        images : [
            { src: "car_type_banner05.png" },
            { src: "car_type_banner05.png" },
            { src: "car_type_banner05.png" }
        ],
        option : [
            { 
                wrapperTag: "ul", 
                loop: true, 
                spaceBetween: 30,  
                slidesPerView: 1, 
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                },
                speed: 500
            }
        ]
    }
    render() {
        const { images, option } = this.state;
        return (
            <section className="banner_content type2">
                <TopHeader className="type2"
                    title="이런 차는 어떄요?"
                    desc=""
                    src="/plus_b.png"
                    alt="more"
                />
                <SwiperCont src={ images } option={ option }/>
            </section>
        )
    }
}

export default BannerCont2