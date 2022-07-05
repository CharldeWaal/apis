import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { selectRandomApi, fetchRandom, isLoading, isError, resetError } from "../../features/apiSlice";
import { useDispatch } from 'react-redux';

import { Error } from '../Error/Error';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 24px;
    margin-left: 16px;
    margin-right: 16px;
    height: 420px;
    width: 480px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 0.5px 5px #888888;
    box-sizing: border-box;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-bottom: 16px;
`;

const Paragraph = styled.h2`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 16px;
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
    text-align: center;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;
`;

const StyledLink = styled.a`
    text-decoration: none;
`;

const Button = styled.button`
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

export const GenerateAPI = () => {
    const dispatch = useDispatch();
    const api = useSelector(selectRandomApi);
    const loading = useSelector(isLoading);
    const error = useSelector(isError);

    const handleClick = () => {
        dispatch(fetchRandom());
    };

    const handleErrorClick = () => {
        dispatch(resetError());
        dispatch(fetchRandom());
    }

    useEffect(() => {
        dispatch(fetchRandom());
    }, []);

    if(error) {
        return (
            <Container>
                <TextContainer>
                <Title>Generate Random API</Title>
            </TextContainer>
                <Error handleClick={handleErrorClick} />
            </Container>
        )
    }

    return (
        <Container>
            <TextContainer>
                <Title>Generate Random API</Title>
                <Paragraph>Click on the button below to generate a random public API</Paragraph>
                <Button onClick={handleClick}>Generate Random API</Button>
            </TextContainer>
            <Column>
                {loading ? 'Loading...' : <APITitle>{api.API}</APITitle>}
                {!loading && <APIDescription>{api.Description}</APIDescription>}
                {!loading && 
                    <StyledLink href={api.Link} target='_blank'>
                        <Button>See More</Button>
                    </StyledLink>
                }
            </Column>
        </Container>
    )
}