import React, { Component } from 'react'
import SwiperCont from './SwiperCont'
import './SlideSection.css';
import TopHeader from './TopHeader';

export class SlideSection extends Component {
    state = {
        images : [
            { src: "car1.png" },
            { src: "car1.png" },
            { src: "car1.png" },
            { src: "car1.png" },
            { src: "car1.png" },
            { src: "car1.png" },
            { src: "more_review.png" }
        ],
        option : [
            { 
                wrapperTag: "ul", 
                loop: false, 
                spaceBetween: 30,
                slidesPerView: 2.4, 
                freeMode: true,
                autoplay: false,
                speed: 500
            }
        ]
    }

    render() {
        const { images, option } = this.state;
        return (
            <section className="slide_section">
                <div className="message">
                    <p>모딜의<br/><b>모든 정보</b> 확인하셨나요?</p>
                </div>
                <TopHeader title="#출고후기"/>
                <SwiperCont src={ images } option={ option }/>
            </section>
        )
    }
}

export default SlideSection
