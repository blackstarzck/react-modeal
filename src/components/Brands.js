import React from 'react';
import './Brands.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrandsItemData } from './BrandsItemData';

function Brands() {
    return(
        <Router>
            <BrandsItems/>
        </Router>
    )
}

function BrandsItems() {
    return (
        <section className="brands">
            <h3>브랜드</h3>
            <ul className="item_wrapper">
                {BrandsItemData.map((item, index) => {
                    return(
                        <li  key={index}>
                            <Link className="link" to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Brands