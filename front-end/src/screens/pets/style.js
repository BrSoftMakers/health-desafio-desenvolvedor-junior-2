import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 5vh 5vw;

    a {
        text-decoration: none;
    }
`;

export const PetCardsContainer = styled.div`
    width: 85vw;
    max-width: 1000px;

    padding-top: 10px;
    padding-bottom: 80px;

    display: grid;

    justify-content: space-around;

    color: #343a40;
    font-size: 18px;

    @media (min-width: 950px) {
        grid-template-columns: 185px 185px 185px 185px;
    }
    @media (max-width: 950px) {
        grid-template-columns: 185px 185px 185px;
    }
    @media (min-width: 520px) and (max-width: 720px) {
        grid-template-columns: 185px 185px;
    }
    @media (max-width: 520px) {
        display: grid;
        grid-template-columns: 185px;
    }
`;
