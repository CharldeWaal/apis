import React from "react";
import styled from 'styled-components';

import { GenerateAPI } from "../../components/GenerateAPI/GenerateAPI";

const RandomAPIContainer = styled.main`
    display: flex;
    height: calc(100vh - 70px);
    width: 100vw;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const RandomAPIPage = () => {
    return (
        <RandomAPIContainer>
            <GenerateAPI />
        </RandomAPIContainer>
    )
};