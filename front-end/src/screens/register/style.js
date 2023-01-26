import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 5vh 5vw;
`;

export const PetForm = styled.div`
    width: 45vw;

    border-radius: 30px;

    margin-bottom: 30px;

    box-shadow: 10px 10px #888888;
`;

export const Heading = styled.div`
    width: 100%;
    height: 10vh;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;

    color: #ffffff;

    background-color: #0077b6;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const Image = styled.img`
    width: 50%;

    border-radius: 50%;

    object-fit: cover;

    background-color: #ffffff;
`;

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 5%;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    background-color: #caf0f8;
`;

export const VStack = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    margin-left: 8%;
`;

export const HStack = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    margin-bottom: 20px;
`;

export const Label = styled.span`
    min-width: 15%;
    font-size: 20px;
    color: #03045e;

    text-align: start;

    margin-right: 5%;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;

export const ErrorMessage = styled.p`
    position: absolute;
    bottom: -15px;
    left: 0;

    font-size: 8px;
    color: red;
`;

export const Input = styled.input`
    width: ${(props) => props.width};
    height: 25px;

    border-radius: 4px;

    font-size: 20px;
    color: black;

    padding-left: 10px;
`;

export const RadioInputLabel = styled.label`
    font-size: 16px;
    color: #03045e;
`;

export const Button = styled.div`
    width: 150px;
    height: 50px;

    font-size: 16px;
    font-weight: bold;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #0077b6;
    border-radius: 8px;
    box-shadow: 0 5px #888888;

    cursor: pointer;

    pointer-events: ${(props) => (props.disable ? "none" : "initial")};

    :hover {
        filter: brightness(1.5);
    }

    :active {
        transform: translateY(5px);
        box-shadow: 0 0;
    }

    user-select: none;
`;
