import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const ProcessHead = styled.div`
    width: 100%;
    background-color: #3c3082;
    padding: 0px 40px 35px 40px;
`
const Title = styled.p`
    font-size: 40px;
    color: #ffff;
    letter-spacing: -1px;
`
const SubTitle = styled(Title)`
    font-size: 30px;
    margin-top: 15px;
`
const PrevBtn = styled.button`
    height: 120px;
    background-color: transparent;
    border: none; outline: none;
    cursor: pointer;
`

function Process() {
    return (
        <div className="price">
            <ProcessHead>
                <PrevBtn>
                    <img src="/icon_prev.png" alt=""/>
                </PrevBtn>
                <Title>직접 딜러가 되세요.</Title>
                <SubTitle>3종 세트보다 큰 딜러 이윤을 현찰로 드립니다.</SubTitle>
            </ProcessHead>
            <Outlet/>
        </div>
    )
}

export default Process