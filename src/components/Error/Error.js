import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    height: calc(100vh - 70px - 28px);
    justify-content: center;
    align-items: center;
`;

const ErrorText = styled.h2`
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    border-radius: 5px;
    color: red;
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

export const Error = ({ handleClick} ) => {
    return (
        <ErrorContainer>
            <ErrorText>
                Error loading data
            </ErrorText>
            <Button onClick={handleClick}>Retry</Button>
        </ErrorContainer>
    )
}