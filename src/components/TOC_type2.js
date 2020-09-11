import React from 'react'

export function TOC_type2({ src, alt, title, sub, index }) {
    return (
        <>
            <li className="item" key={index}>
                <a href="">
                    <img src={src} alt={alt}/>
                    <span className="title">{title}</span>
                    <span className="sub_title">{sub}</span>
                </a>
            </li>
        </> 
    )
}

export default TOC_type2