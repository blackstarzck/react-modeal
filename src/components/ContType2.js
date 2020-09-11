import React, { Component } from 'react';
import TopHeader from './TopHeader';
import { DataType2 } from './Datas';
import TOCtype1 from './TOC_type1';

class ContType2 extends Component {
    state = {
        link : []
    };
    getData(){
        const { DataType2 : { data } } = ({ DataType2 });
        this.setState({ link : data })
    }

    componentDidMount(){
        this.getData();
    }

    render() {
        const { link } = this.state;
        return (
            <section className="cont_type1">
                <TopHeader 
                    title="#모딜 스토리"
                    src="/plus_b.png"
                    alt="더 보기"
                    />
                <ul className="wrapper">
                    <TOCtype1 link={ link }/>
                </ul>
            </section>
        )
    }
}

export default ContType2