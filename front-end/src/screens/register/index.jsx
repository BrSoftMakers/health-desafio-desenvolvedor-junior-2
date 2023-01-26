import CatDogSvg from "../../assets/Cat_Dog.svg";

import * as S from "./style";

export default function Register() {
    return (
        <S.Container>
            <S.PetForm>
                <S.Heading>Dados do pet</S.Heading>

                <S.InputsContainer>
                    <S.Image src={CatDogSvg} />

                    <S.VStack>
                        <S.HStack>
                            <S.Label>Nome:</S.Label>

                            <S.Input width="70%" />
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Tipo:</S.Label>

                            <S.Input width="50%" />
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Raça:</S.Label>

                            <S.Input width="60%" />
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Idade:</S.Label>

                            <S.Input width="20%" />
                        </S.HStack>
                    </S.VStack>
                </S.InputsContainer>
            </S.PetForm>

            <S.PetForm>
                <S.Heading>Dados do dono</S.Heading>

                <S.InputsContainer>
                    <S.VStack style={{ marginLeft: 0 }}>
                        <S.HStack>
                            <S.Label style={{ width: "14%" }}>Nome:</S.Label>

                            <S.Input width="79%" />
                        </S.HStack>

                        <S.HStack style={{ justifyContent: "space-between" }}>
                            <S.HStack>
                                <S.Label style={{ marginRight: "17%" }}>Telefone:</S.Label>

                                <S.Input width="50%" />
                            </S.HStack>

                            <S.HStack>
                                <S.Label>CPF:</S.Label>

                                <S.Input width="60%" />
                            </S.HStack>
                        </S.HStack>
                    </S.VStack>
                </S.InputsContainer>
            </S.PetForm>

            <S.Button>CADASTRAR</S.Button>
        </S.Container>
    );
}
