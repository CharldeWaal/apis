import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { APIOfTheDay } from "../../components/APIOfTheDay/APIOfTheDay";

const HomePage = styled.main`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px - 28px);
    align-items: center;
    justify-content: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 4px;
`;

const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .02em;
    color: #48434f;
    margin: 4px 0px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 64px;
    padding: 12px 12px;
    border-radius: 50%;
    margin-bottom: 16px;

    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    background-color: #48434f;
    color: #fff;
    transition: .3s;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    -webkit-font-smoothing: antialiased;

    &:hover{
        background-color: #48434f;
        color: #fff;
    }
`;

const StyledLink = styled(Link)`
    margin: 4px 8px;
    text-decoration: none;
`;

export const Home = () => {
    return (
        <HomePage>
            <TextContainer>
                <Logo>PUBLIC APIs</Logo>
                <Title>Welcome to Public APIs</Title>
                <Paragraph>A collective list of free APIs for use in software and web development</Paragraph>
                <LinksContainer>
                    <StyledLink to='/apis'>
                        <ButtonContainer>VIEW ALL APIs</ButtonContainer>
                    </StyledLink>
                    <StyledLink to='/categories'>
                        <ButtonContainer>CATEGORIES</ButtonContainer>
                    </StyledLink>
                </LinksContainer>
            </TextContainer>
            <APIOfTheDay/>
        </HomePage>
    )
};