import { useForm, Controller } from "react-hook-form";

import CatDogSvg from "../../assets/Cat_Dog.svg";

import * as S from "./style";

export default function Register() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            type: "",
            breed: "",
            age: "",
            ownerName: "",
            phoneNumber: "",
            CPF: "",
        },
    });

    async function handleApiCall(data) {
        console.log(data);
    }

    return (
        <S.Container>
            <S.PetForm>
                <S.Heading>Dados do pet</S.Heading>

                <S.InputsContainer>
                    <S.Image src={CatDogSvg} />

                    <S.VStack>
                        <S.HStack>
                            <S.Label>Nome:</S.Label>

                            <Controller
                                name="name"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <S.Input
                                        width="70%"
                                        value={value}
                                        onChange={(e) => onChange(e.target.value)}
                                    />
                                )}
                            />
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Tipo:</S.Label>

                            <Controller
                                name="type"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <S.Input
                                        width="50%"
                                        value={value}
                                        onChange={(e) => onChange(e.target.value)}
                                    />
                                )}
                            />
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Raça:</S.Label>

                            <Controller
                                name="breed"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <S.Input
                                        width="60%"
                                        value={value}
                                        onChange={(e) => onChange(e.target.value)}
                                    />
                                )}
                            />
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Idade:</S.Label>

                            <Controller
                                name="age"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <S.Input
                                        width="20%"
                                        value={value}
                                        onChange={(e) => onChange(e.target.value)}
                                    />
                                )}
                            />
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

                            <Controller
                                name="ownerName"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <S.Input
                                        width="79%"
                                        value={value}
                                        onChange={(e) => onChange(e.target.value)}
                                    />
                                )}
                            />
                        </S.HStack>

                        <S.HStack style={{ justifyContent: "space-between" }}>
                            <S.HStack>
                                <S.Label style={{ marginRight: "17%" }}>Telefone:</S.Label>

                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <S.Input
                                            width="50%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                            </S.HStack>

                            <S.HStack>
                                <S.Label>CPF:</S.Label>

                                <Controller
                                    name="CPF"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <S.Input
                                            width="60%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                            </S.HStack>
                        </S.HStack>
                    </S.VStack>
                </S.InputsContainer>
            </S.PetForm>

            <S.Button onClick={handleSubmit(handleApiCall)}>CADASTRAR</S.Button>
        </S.Container>
    );
}
