import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import EstiHead from '../components/sub_pg_estimate/EstiHead';

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
const contents = [
    { id: "1", category : "", title: "브랜드"}, 
    { id: "2", category : "/price", title: "가격대"},
]

function Estimate() {
    const lis = [];
    for(let i = 0; i < contents.length; i++){
        lis.push(
            <Listitem key={ contents[i].id }>
                <StyledLink to={"/estimate" + contents[i].category} end={true} activeStyle={{color: "#fc673b"}}>
                    {contents[i].title}
                </StyledLink>
            </Listitem>
        )
    }
    return (
        <div className='estimate'>
            <EstiHead/>
            <ListWrapper>
                { lis }
            </ListWrapper>
            <Outlet/>
        </div>
    )
}

export default Estimate;