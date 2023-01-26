import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr;

    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAACUCAMAAAD70yGHAAAAA1BMVEXK8PicmLXfAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBnA8UkAAEmGMCJAAAAAElFTkSuQmCC);
    padding: 10vh 0;
`;

export const ColumnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 50vw;
`;

export const Heading = styled.h2`
    font-size: 35px;
    line-height: 130%;
    text-align: center;

    color: blue;

    width: 60%;
`;
