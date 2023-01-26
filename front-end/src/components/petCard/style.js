import styled from "styled-components";

export const Container = styled.div`
    width: 15vw;
    height: 40vh;

    margin-bottom: 25px;
    padding: 5%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: linear-gradient(to right, #0099ff, #caf0f8);

    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;

    box-shadow: 5px 5px #888888;
    border-radius: 10px;

    cursor: pointer;

    :hover {
        filter: drop-shadow(8px 8px 4px gray);
        animation: tilt-shaking 5s infinite;

        @keyframes tilt-shaking {
            0% {
                transform: rotateY(0deg);
            }
            25% {
                transform: rotateY(30deg);
            }
            50% {
                transform: rotateY(0deg);
            }
            75% {
                transform: rotateY(-30deg);
            }
            100% {
                transform: rotateY(0deg);
            }
        }
    }
`;

export const Image = styled.img`
    height: 50%;

    margin-bottom: 7px;

    align-self: center;
`;

export const PetName = styled.p`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;

    background: linear-gradient(to right, #ffffff, #000000);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;

    @keyframes rainbow_animation {
        0%,
        100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
`;

export const Breed = styled.p`
    margin-bottom: 4px;
    font-size: 15px;

    text-align: center;

    background: linear-gradient(to right, #ffffff, #000000);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;

    @keyframes rainbow_animation {
        0%,
        100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
`;

export const PhoneNumber = styled.p`
    font-size: 16px;
    font-family: "Playfair Display", serif;
    font-weight: bold;
    font-style: italic;
    text-align: center;

    background: linear-gradient(to right, #ffffff, #000000);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;

    @keyframes rainbow_animation {
        0%,
        100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
`;
