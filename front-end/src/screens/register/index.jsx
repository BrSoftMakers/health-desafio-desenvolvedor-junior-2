import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import CatDogSvg from "../../assets/Cat_Dog.svg";

import * as S from "./style";

const petDataSchema = yup.object().shape({
    name: yup.string().trim().required("Informe o nome."),
    type: yup.string().trim().oneOf(["GATO", "CACHORRO"]).required("Informe o tipo do pet."),
    breed: yup.string().trim().required("Informe a raça do pet."),
    age: yup.number().positive().required("Informe a idade."),
    ownerName: yup.string().trim().required("Informe o nome do usuário"),
    phoneNumber: yup.string().trim().required("informe o telefone."),
    CPF: yup.string().trim().required("Informe o CPF."),
});

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
        resolver: yupResolver(petDataSchema),
    });

    async function handleApiCall(data) {
        console.log("clickei");
        console.log(data);
        console.log(errors);
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

                            <S.InputWrapper>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <S.Input
                                            width="100%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                                <S.ErrorMessage>
                                    {errors.name ? errors.name.message : ""}
                                </S.ErrorMessage>
                            </S.InputWrapper>
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Tipo:</S.Label>

                            <S.InputWrapper>
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
                                <S.ErrorMessage>
                                    {errors.type ? errors.type.message : ""}
                                </S.ErrorMessage>
                            </S.InputWrapper>
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Raça:</S.Label>

                            <S.InputWrapper>
                                <Controller
                                    name="breed"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <S.Input
                                            width="100%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                                <S.ErrorMessage>
                                    {errors.breed ? errors.breed.message : ""}
                                </S.ErrorMessage>
                            </S.InputWrapper>
                        </S.HStack>

                        <S.HStack>
                            <S.Label>Idade:</S.Label>

                            <S.InputWrapper>
                                <Controller
                                    name="age"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <S.Input
                                            width="30%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                            inputMode="numeric"
                                            type="number"
                                        />
                                    )}
                                />
                                <S.ErrorMessage>
                                    {errors.age ? errors.age.message : ""}
                                </S.ErrorMessage>
                            </S.InputWrapper>
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

                            <S.InputWrapper>
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
                                <S.ErrorMessage>
                                    {errors.ownerName ? errors.ownerName.message : ""}
                                </S.ErrorMessage>
                            </S.InputWrapper>
                        </S.HStack>

                        <S.HStack style={{ justifyContent: "space-between" }}>
                            <S.HStack>
                                <S.Label style={{ marginRight: "17%" }}>Telefone:</S.Label>

                                <S.InputWrapper>
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
                                    <S.ErrorMessage>
                                        {errors.phoneNumber ? errors.phoneNumber.message : ""}
                                    </S.ErrorMessage>
                                </S.InputWrapper>
                            </S.HStack>

                            <S.HStack>
                                <S.Label>CPF:</S.Label>

                                <S.InputWrapper>
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
                                    <S.ErrorMessage>
                                        {errors.CPF ? errors.CPF.message : ""}
                                    </S.ErrorMessage>
                                </S.InputWrapper>
                            </S.HStack>
                        </S.HStack>
                    </S.VStack>
                </S.InputsContainer>
            </S.PetForm>

            <S.Button onClick={handleSubmit(handleApiCall)}>CADASTRAR</S.Button>
        </S.Container>
    );
}
