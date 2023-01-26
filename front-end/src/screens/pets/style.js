import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5vh 5vw;
`;

export const PetCardsContainer = styled.div`
    width: 85vw;
    max-width: 1000px;

    padding-top: 10px;
    padding-bottom: 80px;

    display: grid;
    grid-template-columns: 16% 16% 16% 16%;
    justify-content: space-between;
    align-items: center;
    color: #343a40;
    font-size: 18px;
`;
