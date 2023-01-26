import styled from "styled-components";

export const Container = styled.div`
    width: 15vw;
    height: 40vh;

    margin-bottom: 25px;
    padding: 5%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #caf0f8;

    box-shadow: 5px 5px #888888;
    border-radius: 10px;
`;

export const Image = styled.img`
    height: 50%;

    margin-bottom: 7px;

    align-self: center;
`;

export const PetName = styled.p`
    text-overflow: clip;
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;
`;

export const Breed = styled.p`
    margin-bottom: 4px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
`;

export const PhoneNumber = styled.p`
    font-size: 13px;
    text-align: center;
`;
