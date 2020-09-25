import React from 'react'
import { NavLink,  Routes, Route, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import EstiHead from './EstiHead';

const ListWrapper = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Listitem = styled.li`
    width: calc(100% / 2);
`
const StyledLink = styled(NavLink)`
    display: block;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #9ea2ab;
    line-height: 110px;
    border-bottom: solid 1px #dedede;
`

const EstimateMainPage = () => {
    return (
        <div>
            <EstiHead></EstiHead>
            <ListWrapper>
                <Listitem>
                    <StyledLink to="/estimate" activeStyle={{color: "#fc673b"}}>브랜드</StyledLink>
                </Listitem>
                <Listitem>
                    <StyledLink to="/estimate/price" activeStyle={{color: "#fc673b"}}>가격대</StyledLink>
                </Listitem>
            </ListWrapper>

            <Outlet/>
        </div>
    )
}

export default EstimateMainPage
