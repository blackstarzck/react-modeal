import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    padding: 0 40px;
`
const Wrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Item = styled.li`
    width: calc(100% / 4);
    height: 140px;
    margin-top: 35px;

    a {
        display: block;
    }
    img {
        display: block;
        width: 125px;
        margin: 0 auto;
    }
    p {
        font-size: 24px;
        color: #000;
        font-weight: 300;
        text-align: center;
    }
`

function Brand() {
    const [ list, setPosts ] = useState([]);
    useEffect(() => {
        axios
        .get(
            "http://localhost:8080/_interface/car/create_select.php")
            .then(res => {
                setPosts(res.data);
            });
    }, []);
    return (
        <Container>
            <Wrapper>
                {list.map((C_CODE, index) => {
                    return(
                        <Item key={index}>
                            <Link to={`/estimate/process/${C_CODE.C_CODE}`}> 
                                <img src={`http://localhost:8080/${C_CODE.C_IMG}`} alt={C_CODE.C_NAME}/>
                                <p>{C_CODE.C_NAME}</p>
                            </Link>
                        </Item>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default Brand
