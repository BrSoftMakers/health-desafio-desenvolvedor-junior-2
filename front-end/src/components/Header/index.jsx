import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";

import { Container, Title, NavButton, FlexContainer } from "./style";

export default function Header() {
    return (
        <Container>
            <FlexContainer>
                <img
                    src={Logo}
                    style={{ backgroundColor: "white" }}
                    width="60px"
                    height="40px"
                />
                <Title>PetShop</Title>
            </FlexContainer>

            <FlexContainer>
                <Link to="/">
                    <NavButton>HOME</NavButton>
                </Link>
                <Link to="/pets">
                    <NavButton>PETS</NavButton>
                </Link>

                <Link to="register">
                    <NavButton>REGISTRAR</NavButton>
                </Link>
            </FlexContainer>
        </Container>
    );
}
