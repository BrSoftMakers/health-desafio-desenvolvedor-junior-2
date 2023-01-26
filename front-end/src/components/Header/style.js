import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 5%;

    box-shadow: 0px 8px 8px #888888;
    background-color: #f8f9fa;

    a {
        text-decoration: none;
        color: unset;
    }
`;

export const FlexContainer = styled.div`
    display: flex;

    align-items: center;
`;

export const Title = styled.h1`
    font-size: 16px;
    font-family: "Satisfy", cursive;

    color: #3f5da4;

    font-weight: bold;

    margin-left: 5px;
`;

export const NavButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 5vw;

    text-transform: uppercase;

    font-size: 14px;
    font-weight: bold;
    color: #1955c9;

    :hover {
        color: #caf0f8;
    }
`;
