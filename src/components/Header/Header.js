import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../../../src/apiLogo.png';

const NavBarContainer = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: sticky;
    width: 100%;
    top: 0;
    height: ${(props) => (props.extendNavbar ? "100vh" : "70px")};
    background-color: #fff;
    z-index: 99;
    border-bottom: 1px solid #e7e7e7;
    transition: top .34s ease-out;
`;

const LeftInnerContainer = styled.div`
    display: flex;
    flex: 70%;
    align-items: center;
    padding-left: 16px;
`;

const RightInnerContainer = styled.div`
    display: flex;
    flex: 30%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 16px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 12px;

    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    background-color: #48434f;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;

    &:hover {

    }

    @media (max-width: 700px) {
        width: 80px;
        flex: 1;
    }
`;

const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
    margin: 5px 10px;
    text-decoration: none;
`;

const NavbarLink = styled(NavLink)`
    text-transform: uppercase;
    color: #48434f;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    text-decoration: none;
    margin: 5px 16px;

    display: block;
    position: relative;

    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    cursor: pointer;

    &:hover {
        color: #fc0;
    }

    &:active {
        color: #fc0;
    }

    &:focus {
        color: #fc0;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const Header = () => {
    return (
        <NavBarContainer>
            <LeftInnerContainer>
                <LogoLink to='/'>
                    <Logo>Public Apis</Logo>
                </LogoLink>
                <NavbarLink to='/apis'>All Apis</NavbarLink>
                <NavbarLink to='/categories'>Categories</NavbarLink>
                <NavbarLink to='/daily-api'>Api of the day</NavbarLink>
            </LeftInnerContainer>
            <RightInnerContainer>

            </RightInnerContainer>
        </NavBarContainer>
    )
};