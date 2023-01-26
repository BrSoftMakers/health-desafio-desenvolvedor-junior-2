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
                <NavButton>HOME</NavButton>
                <NavButton>PETS</NavButton>
                <NavButton>REGISTRAR</NavButton>
            </FlexContainer>
        </Container>
    );
}
