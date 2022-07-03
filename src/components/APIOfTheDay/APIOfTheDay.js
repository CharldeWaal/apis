import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchRandomAPI } from "../../utils/utils";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 52px;
    height: 200px;
    width: 480px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 0.5px 5px #888888;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const Column = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`;

const Title = styled.h1`
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;
`;

const StyledDate = styled.h1`
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;
`;

const APITitle = styled.h2`
    font-size: 22px;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;
`;

const APIDescription = styled.h2`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;
`;

const StyledLink = styled.a`
    text-decoration: none;
`;

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
    background-color: #fff;
    color: #48434f;
    border: 1px solid #48434f;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    text-decoration: none;
    width: 220px;
    text-align: center;
    height: 39px;
    padding: 0 28px;
    cursor: pointer;
    border-radius: 4px;
    transition: .2s;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;

    &:hover{
        background-color: #48434f;
        color: #fff;
    }
`;

export const APIOfTheDay = () => {
    const [api, setApi] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded) {
            fetchRandomAPI().then(res => {
                console.log(res.entries[0]);
                setApi(res.entries[0]);
                setLoaded(true);
            });
        }
    }, []);

    return (
        <Container>
            <Row>
                <Title>API Of The Day</Title>
                <StyledDate>Date: {new Date().toLocaleDateString()}</StyledDate>
            </Row>
            <Column>
                {api.API && <APITitle>{api.API}</APITitle>}
                {<APIDescription>{api.Description}</APIDescription>}
                <StyledLink href={api.Link} target='_blank'>
                    <ButtonContainer>See More</ButtonContainer>
                </StyledLink>
            </Column>
        </Container>
    )
}
