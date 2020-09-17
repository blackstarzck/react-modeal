import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { MenuItems } from './MenuItems';

function Menu() {
    return (
        <ul className="menu">
            {MenuItems.map((item, index) => {
                return(
                    <li className="menu-item" key={index}>
                        <NavLink to={item.path} exact={true} activeClassName='clicked'>
                            <div className="icon">
                                <img src={item.imgSrc} alt={item.title}/>
                            </div>
                            <p>{item.title}</p>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu