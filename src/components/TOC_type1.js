import React, { Component } from 'react'

export class TOCtype1 extends Component {
    render() {
        const lists = [];
        const data = this.props.link;
        for(let i = 0; i < data.length; ++i){
            const item =  data[i];
            lists.push(
                <li className='item' key={item.id}>
                    <a href="">
                        <img src={item.src} alt={item.alt}/>
                    </a>
                </li>
            )
        }
        return (
            <>
                {lists}
            </>
        )
    }
}

export default TOCtype1