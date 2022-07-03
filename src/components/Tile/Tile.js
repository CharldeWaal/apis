import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";

const TileElement = styled.div`
    flex: 1 1 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    margin-right: 16px;
    height: 280px;
    padding: 16px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 0.5px 5px #888888;
`;

const Header = styled.h4`
    color: #1d1e23;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.4545;
    margin: 0px;
`;

const Paragraph = styled.p`
    display: block;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 400;
    color: #5c646c;
    text-transform: none;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
`;

const IconDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin: 16px;
    box-shadow: 1px 0.5px 5px #888888;
    color: #003e6e;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Tile = ({ title, description, link }) => {
    return (
        <TileElement>
            <Header>{title}</Header>
            <Paragraph>{description}</Paragraph>
            <StyledLink to={link}>
                <Button text='See More' type="button"/>
            </StyledLink>
        </TileElement>
    )
};