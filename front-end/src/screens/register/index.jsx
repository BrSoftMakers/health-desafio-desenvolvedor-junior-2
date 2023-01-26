import CatDogSvg from "../../assets/Cat_Dog.svg";

import {
    Container,
    PetForm,
    Input,
    InputsContainer,
    Heading,
    Image,
    VStack,
    HStack,
    Label,
    Button,
} from "./style";

export default function Register() {
    return (
        <Container>
            <PetForm>
                <Heading>Dados do pet</Heading>
                <InputsContainer>
                    <Image src={CatDogSvg} />
                    <VStack>
                        <HStack>
                            <Label>Nome:</Label>
                            <Input width="70%" />
                        </HStack>

                        <HStack>
                            <Label>Tipo:</Label>
                            <Input width="50%" />
                        </HStack>

                        <HStack>
                            <Label>Raça:</Label>
                            <Input width="60%" />
                        </HStack>

                        <HStack>
                            <Label>Idade:</Label>
                            <Input width="20%" />
                        </HStack>
                    </VStack>
                </InputsContainer>
            </PetForm>

            <PetForm>
                <Heading>Dados do dono</Heading>
                <InputsContainer>
                    <VStack style={{ marginLeft: 0 }}>
                        <HStack>
                            <Label style={{ width: "14%" }}>Nome:</Label>
                            <Input width="79%" />
                        </HStack>

                        <HStack style={{ justifyContent: "space-between" }}>
                            <HStack>
                                <Label style={{ marginRight: "17%" }}>Telefone:</Label>
                                <Input width="50%" />
                            </HStack>

                            <HStack>
                                <Label>CPF:</Label>
                                <Input width="60%" />
                            </HStack>
                        </HStack>
                    </VStack>
                </InputsContainer>
            </PetForm>

            <Button>CADASTRAR</Button>
        </Container>
    );
}
