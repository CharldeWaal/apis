import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    position: sticky;
    width: 100%;
    top: 0;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: #899DAE;
    z-index: 99;
    border-bottom: 1px solid #e7e7e7;
    transition: top .34s ease-out;
`;

export const Header = () => {
    return (
        <NavBarContainer>

        </NavBarContainer>
    )
};