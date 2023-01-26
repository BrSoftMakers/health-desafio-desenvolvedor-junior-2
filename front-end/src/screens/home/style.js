import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;

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

    position: relative;
`;

export const Heading = styled.h2`
    font-size: 60px;
    font-family: "Lilita One", cursive;
    line-height: 130%;
    text-align: center;

    color: #ffffff;

    width: 60%;

    animation: tilt-shaking 5s infinite;

    @keyframes tilt-shaking {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(0eg);
        }
        75% {
            transform: rotate(-5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
`;

export const Image = styled.img`
    @keyframes fade {
        0% {
            opacity: 1;
        }
        33% {
            opacity: 0;
        }
        66% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: fade 15s infinite;
    animation: fade 15s infinite;
`;
