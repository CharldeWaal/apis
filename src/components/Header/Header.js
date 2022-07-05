import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBarContainer = styled.nav`
    display: flex;
    flex-direction: column;
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

const InnerContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    padding-left: 16px;

    @media (max-width: 640px) {
        display: none;
    }
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
    transition: .3s;

    &:hover{
        box-shadow: 1px 0.5px 5px #222;
    }

    @media (max-width: 640px) {
        padding: 8px 8px;
        margin-left: 16px;
    }
`;

const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
    margin: 5px 10px;
    text-decoration: none;

    @media (max-width: 640px) {
        flex: 1;
    }
`;

const NavbarLink = styled(NavLink)`
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
        opacity: 0.5;
    }

    &:active {
        opacity: 0.5;
    }

    &:focus {
        opacity: 0.5;
    }

    @media (max-width: 640px) {
        display: none;
    }
`;

const NavbarExtendedLink = styled(NavLink)`
    color: #48434f;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .10em;
    line-height: 1.16667;
    text-decoration: none;
    margin: 18px 16px;

    display: block;
    position: relative;

    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }

    &:active {
        opacity: 0.5;
    }

    &:focus {
        opacity: 0.5;
    }
`;

const MobileContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: stretch;
    align-items: center;

    @media (min-width: 640px) {
        display: none;
    }
`;

const OpenLinksButton = styled.button`
    display: flex;
    flex: 1;
    height: 50px;
    margin-right: 16px;
    align-items: center;
    justify-content: flex-end;
    background: none;
    border: none;

    @media (min-width: 640px) {
        display: none;
    }
`;

const NavbarExtended = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #e7e7e7;

    @media (min-width: 640px) {
        display: none;
    }
`;

export const Header = () => {
    const [extendedNavbar, setExtendedNavbar] = useState(false);

    const handleClick = () => {
        setExtendedNavbar(!extendedNavbar);
    }

    return (
        <NavBarContainer extendNavbar={extendedNavbar}>
            <InnerContainer>
                <LogoLink to='/'>
                    <Logo>PUBLIC APIs</Logo>
                </LogoLink>
                <NavbarLink to='/apis'>ALL APIs</NavbarLink>
                <NavbarLink to='/categories'>CATEGORIES</NavbarLink>
                <NavbarLink to='/random-api'>RANDOM API</NavbarLink>
            </InnerContainer>
            <MobileContainer>
                <LogoLink to='/'>
                    <Logo>PUBLIC APIs</Logo>
                </LogoLink>
                <OpenLinksButton onClick={handleClick}>
                    { extendedNavbar ? <CloseIcon/> : <MenuIcon/>}
                </OpenLinksButton>
            </MobileContainer>
            {extendedNavbar && <NavbarExtended onClick={handleClick}>
                <NavbarExtendedLink to='/apis'>ALL APIs</NavbarExtendedLink>
                <NavbarExtendedLink to='/categories'>CATEGORIES</NavbarExtendedLink>
                <NavbarExtendedLink to='/random-api'>RANDOM API</NavbarExtendedLink>
            </NavbarExtended>}
        </NavBarContainer>
    )
};