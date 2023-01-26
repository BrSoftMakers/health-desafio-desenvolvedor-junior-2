import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";

import { Container, Title, NavButton, FlexContainer } from "./style";

export default function Header() {
    const [pathName, setPathName] = useState("/");

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
                    <NavButton
                        disable={window.location.pathname === "/"}
                        onClick={() => setPathName(window.location.pathname)}
                    >
                        HOME
                    </NavButton>
                </Link>
                <Link to="/pets">
                    <NavButton
                        disable={window.location.pathname === "/pets"}
                        onClick={() => setPathName(window.location.pathname)}
                    >
                        PETS
                    </NavButton>
                </Link>

                <Link to="register">
                    <NavButton
                        disable={window.location.pathname === "/register"}
                        onClick={() => setPathName(window.location.pathname)}
                    >
                        REGISTRAR
                    </NavButton>
                </Link>
            </FlexContainer>
        </Container>
    );
}
