import { Container, Heading, ColumnWrapper, Image } from "./style";

import CatDogSvg from "../../assets/Cat_Dog.svg";
import CatSvg from "../../assets/cat.svg";
import DogSvg from "../../assets/dog.svg";

export default function Home() {
    return (
        <Container>
            <ColumnWrapper>
                <Heading>Fazendo um lugar macio para o seu pet</Heading>
            </ColumnWrapper>
            <ColumnWrapper>
                <Image
                    src={CatDogSvg}
                    width="500px"
                    style={{ animationDelay: "0s" }}
                />
                <Image
                    src={CatSvg}
                    width="500px"
                    style={{ animationDelay: "5s", opacity: 0 }}
                />
                <Image
                    src={DogSvg}
                    width="500px"
                    style={{ animationDelay: "10s", opacity: 0 }}
                />
            </ColumnWrapper>
        </Container>
    );
}
