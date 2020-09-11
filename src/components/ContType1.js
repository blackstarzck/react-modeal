import React, { Component } from 'react';
import TopHeader from './TopHeader';
import { DataType1 } from './Datas';
import TOCtype1 from './TOC_type1';

class ContType1 extends Component {
    state = {
        link : []
    };
    getData(){
        const { DataType1 : { data } } = ({ DataType1 });
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
                    title="#모딜TIP"
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

export default ContType1