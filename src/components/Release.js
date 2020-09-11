import React, { Component } from 'react';
import './Release.css';
import TOC_type2 from "./TOC_type2";
import TopHeader from './TopHeader';

class Release extends Component {
    state = {
        contents : [
            { src: "/img1.png", title: "GV80 최대 1,500만원 할인!", sub: "다시 없을 할인! 11~19%할인"} ,
            { src: "/img1.png", title: "빠른출고는 모딜 바로검색!", sub: "즉시출고 리스트 매일 업데이트" },
            { src: "/img1.png", title: "벤츠 E-class 할인+즉시출고", sub: "상담시 스타벅스 커피 증정" },
            { src: "/img1.png", title: "쏘렌토 파격 특가로 즉시출고", sub: "개소세1.5%유지,289만원 할인!" }
        ]
    }

    render() {
        const { contents } = this.state;

        return (
            <section className="release">
                <TopHeader 
                    title="즉시출고" 
                    desc="가능한 차량 확인하세요!"
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

export default Release