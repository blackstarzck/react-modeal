import React, { Component } from 'react';
import TOC_type2 from "./TOC_type2";
import TopHeader from "./TopHeader";

class Release2 extends Component {
    state = {
        contents : [
            { src: "/img2.png", title: "수입차 재고찾기, 구해줘모딜!", sub: "30일 안에 못 찾으면 50만Point"} ,
            { src: "/img2.png", title: "국내최저가! 장기렌트 9월 특가", sub: "520i외 3종, 지금 확인!" },
            { src: "/img2.png", title: "할부구매 현금지원 이벤트", sub: "국산차 최대 110만원 지원!" },
            { src: "/img2.png", title: "Discovery Sport 한정 특가!!", sub: "다재다능한 SUV를 내 손에!" }
        ]
    }

    render() {
        const { contents } = this.state;
        return (
            <section className="release">
                <TopHeader 
                    title="모두가딜러 혜택" 
                    src="/plus_b.png"
                    alt="more"
                />
                <ul className="wrapper">
                    {contents.map((content, index) => {
                        return (
                            <TOC_type2 
                                key={index}
                                src={content.src} 
                                alt={content.alt}
                                title={content.title} 
                                sub={content.sub}
                            />
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default Release2