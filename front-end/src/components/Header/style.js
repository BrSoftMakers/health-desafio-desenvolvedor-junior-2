import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 5%;

    box-shadow: 0px 8px 8px #888888;
    background-color: var(--light);
`;

export const FlexContainer = styled.div`
    display: flex;

    align-items: center;
`;

export const Title = styled.h1`
    font-size: 16px;
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
    color: ${(props) => props.color};
`;
