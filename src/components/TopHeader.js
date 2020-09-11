import React from 'react'

export function TopHeader({ title, bold, desc, src, alt, className }){
    return(
        <div className='top'>
            <div className="title">
                <h3 className={className}>{title} <b>{bold}</b></h3>
                <p>{desc}</p>
            </div>
            <div className="link">
                <a href="">
                    <img src={src} alt={alt}/>
                </a>
            </div>
        </div>
    )
}

export default TopHeader