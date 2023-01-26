import { Container, Heading, ColumnWrapper } from "./style";

import CatDogSvg from "../../assets/Cat_Dog.svg";

export default function Home() {
    return (
        <Container>
            <ColumnWrapper>
                <Heading>Fazendo um lugar macio para o seu pet</Heading>
            </ColumnWrapper>
            <ColumnWrapper>
                <img
                    src={CatDogSvg}
                    width="500px"
                />
            </ColumnWrapper>
        </Container>
    );
}
