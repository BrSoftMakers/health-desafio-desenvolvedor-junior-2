import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

import Logo from "../../assets/Logo.png";

import { Container, Title, NavButton, FlexContainer } from "./style";

export default function Header() {
    const [pathName, setPathName] = useState("/");

    const location = useLocation();

    useEffect(() => {
        setPathName(location.pathname);
    }, [location]);

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
                    <NavButton disable={pathName === "/"}>HOME</NavButton>
                </Link>
                <Link to="/pets">
                    <NavButton disable={pathName === "/pets"}>PETS</NavButton>
                </Link>

                <Link to="register">
                    <NavButton disable={pathName === "/register"}>REGISTRAR</NavButton>
                </Link>
            </FlexContainer>
        </Container>
    );
}
