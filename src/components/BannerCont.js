import React, { Component } from 'react'
import SwiperCont from './SwiperCont';
import './BannerCont.css';
import TopHeader from './TopHeader';

export class BannerCont extends Component {
    state = {
        images : [
            { src: "rent_banner03.png" },
            { src: "rent_banner03.png" },
            { src: "rent_banner03.png" }
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
            <section className="banner_content">
                <TopHeader
                    title="내 인생 첫 차라면?"
                    bold="장기렌트!"
                    desc=""
                    src="/plus_b.png"
                    alt="more"
                />
                <SwiperCont src={ images } option={ option }/>
            </section>
        )
    }
}

export default BannerCont