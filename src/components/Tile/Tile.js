import React from "react";
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";

const TileElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 16px;
    height: 80px;
    width: 160px;
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

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        opacity: .5;
    }
`;

export const Tile = ({ title, description }) => {
    const { pathname } = useLocation();

    return (
        <TileElement>
            <StyledLink to={`${pathname}/${title}`}>
                <Header>{title}</Header>
                <Paragraph>{description}</Paragraph>
            </StyledLink>
        </TileElement>
    )
};