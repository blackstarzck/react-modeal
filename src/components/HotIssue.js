import React from 'react';
import './HotIssue.css';

function HotIssue() {
    return (
        <section className='hotissue'>
            <div className='top'>
                <h3>핫이슈</h3>
                <div className="link">
                    <a href="">
                        <img src="/plus_b.png" alt="더보기"/>
                    </a>
                </div>
            </div>
            <ul className="wrapper">
                <li className='item'><a href=""><img src="/issue1.png" alt=""/></a></li>
                <li className='item'><a href=""><img src="/issue1.png" alt=""/></a></li>
                <li className='item'><a href=""><img src="/issue1.png" alt=""/></a></li>
            </ul>
        </section>
    )
}

export default HotIssue
