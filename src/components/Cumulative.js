import React from 'react';
import './Cumulative.css';

function Cumulative() {
    return (
        <div className="deal_container">
            <div className="deal_info">
                <div className="item i1">
                    <div className="icon"></div>
                    <h4>누적 거래액</h4>
                    <p>19.05 ~ 20.08</p>
                </div>
                <div className="item i2">
                    <h4>차량 거래</h4>
                    <p>
                        <span className="data">5,487</span>대
                    </p>
                </div>
                <div className="item i2">
                    <h4>누적 거래</h4>
                    <p>
                        <span className="data">2,189</span>억
                    </p>
                </div>
            </div>
            <div className="banner">
                <a href="">
                    <img src="/banner/banner2.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Cumulative