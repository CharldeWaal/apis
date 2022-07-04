import React from "react";
import styled from "styled-components";

const FooterContainer = styled.section`
    position: sticky;
    bottom: 0;
    display: flex;
    height: 28px;
    width: 100vw;
    padding: 16px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 2;
`;

const Text = styled.h4`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;
`;

const StyledLink = styled.a`
    font-size: 12px;
    font-weight: 400;
    font-family: 'Inter', sans-serif;
    line-height: 1.667;
    letter-spacing: .1em;
    color: #48434f;

    &:hover {
        opacity: .5;
    }
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <Text>Created by Charl de Waal for <StyledLink href='https://www.imgn.co.za/' target='_blank'>IMGN</StyledLink></Text>
        </FooterContainer>
    )
}