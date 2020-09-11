import React, { Component } from 'react'
import './HotIssue.css';
import TOCtype1 from './TOC_type1';
import { Datas } from './Datas';


class HotIssue extends React.Component {
    render() {
        const { Datas : { data } } = ({ Datas });
        // console.log(data);

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
                    <TOCtype1 link={ data }/>
                </ul>
            </section>
        )
    }
}

export default HotIssue


// import React from 'react'
// import './HotIssue.css';
// import { Datas } from './Datas';

// function HotIssue() {
//     return (
//         <section>
//             <div className='top'>
//                 <h3>핫이슈</h3>
//                 <div className="link">
//                     <a href="">
//                         <img src="/plus_b.png" alt="더보기"/>
//                     </a>
//                 </div>
//             </div>
//             <ul className="wrapper">
//                 {Datas.map((item, index) => {
//                     return (
//                         <li className='item' key={index}>
//                             <a href=''>
//                                 <img src={item.src} alt={item.alt} />
//                             </a>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </section>
//     )
// }

// export default HotIssue