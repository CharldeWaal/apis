import React from "react";
import styled from 'styled-components';

const HomePage = styled.main`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
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

    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    background-color: #48434f;
    color: #fff;
    transition: .3s;
`;

export const Home = () => {
    return (
        <HomePage>
            <Logo>PUBLIC APIs</Logo>
            <Title>Welcome to Public APIs</Title>
            <Paragraph>A collective list of free APIs for use in software and web development</Paragraph>
        </HomePage>
    )
};