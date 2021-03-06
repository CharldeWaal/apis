import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { selectDailyApi, fetchDaily, isLoading, isDailyFetched, isError, resetError } from "../../features/apiSlice";
import { useDispatch } from 'react-redux';
import { Error } from "../Error/Error";

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

    @media (max-width: 640px) {
        height: 240px;
        width: 320px;
    }
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

    @media (max-width: 640px) {
        font-size: 14px;
    }
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

    @media (max-width: 640px) {
        font-size: 14px;
    }
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

    @media (max-width: 640px) {
        font-size: 18px;
    }
`;

const APIDescription = styled.h2`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    text-align: center;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;

    @media (max-width: 640px) {
        font-size: 14px;
    }
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
    const dispatch = useDispatch();
    const api = useSelector(selectDailyApi);
    const loading = useSelector(isLoading);
    const isFetched = useSelector(isDailyFetched);
    const error = useSelector(isError);

    useEffect(() => {
        if(!isFetched) {
            dispatch(fetchDaily());
        }
    }, []);

    const handleClick = () => {
        dispatch(resetError());
        dispatch(fetchDaily());
    }

    if(error) {
        return (
            <Container>
                <Error handleClick={handleClick}/>
            </Container>
        )
    }

    return (
        <Container>
            <Row>
                <Title>API Of The Day</Title>
                <StyledDate>Date: {new Date().toLocaleDateString()}</StyledDate>
            </Row>
            <Column>
                {loading ? 'Loading...' : <APITitle>{api.API}</APITitle>}
                {!loading && <APIDescription>{api.Description}</APIDescription>}
                {!loading && 
                    <StyledLink href={api.Link} target='_blank'>
                        <ButtonContainer>See More</ButtonContainer>
                    </StyledLink>
                }
            </Column>
        </Container>
    )
}
