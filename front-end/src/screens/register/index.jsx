import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ownerApi } from "../../services/ownerApi";
import { petApi } from "../../services/petApi";

import { unmaskPhoneNumber, maskPhoneNumber } from "../../utils/maks/phone";
import { maskCpf, unmaskCpf } from "../../utils/maks/cpf";

import Loading from "../../components/Loading";

import CatDogSvg from "../../assets/Cat_Dog.svg";

import * as S from "./style";

const petDataSchema = yup.object().shape({
    name: yup.string().trim().required("Informe o nome."),
    type: yup.string().trim().oneOf(["GATO", "CACHORRO"]).required("Informe o tipo do pet."),
    breed: yup.string().trim().required("Informe a raça do pet."),
    age: yup
        .number()
        .integer("Número sem virgula")
        .positive("Deve ser um número positivo")
        .required("Informe a idade.")
        .typeError("Deve ser um número"),
    ownerName: yup.string().trim().required("Informe o nome do usuário"),
    phoneNumber: yup
        .string()
        .trim()
        .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])\d{3}\-\d{4}$/, "Telefone inválido")
        .required("informe o telefone."),
    CPF: yup
        .string()
        .trim()
        .matches(/^((\d{3}.\d{3}.\d{3}-\d{2}))$/, "CPF inválido")
        .required("Informe o CPF."),
});

export default function Register() {
    const [isLoading, setIsLoading] = useState(false);

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

    async function handleApiCall(body) {
        setIsLoading(true);

        try {
            const ownerBody = {
                name: body.ownerName,
                phoneNumber: unmaskPhoneNumber(body.phoneNumber),
                CPF: unmaskCpf(body.CPF),
            };

            const ownerData = await ownerApi.createOrUpdateOwner(ownerBody);

            const petBody = {
                name: body.name,
                type: body.type,
                breed: body.breed,
                age: body.age,
                ownerId: ownerData.id,
            };

            await petApi.post(petBody);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
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
                                            type="text"
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
                            <S.Label>Espécie:</S.Label>

                            <S.InputWrapper>
                                <S.HStack
                                    style={{
                                        marginBottom: 0,
                                        marginLeft: "10px",
                                        justifyContent: "space-around",
                                    }}
                                >
                                    <S.HStack style={{ marginBottom: 0 }}>
                                        <Controller
                                            name="type"
                                            control={control}
                                            render={({ field: { onChange } }) => (
                                                <S.Input
                                                    id="CACHORRO"
                                                    type="radio"
                                                    name="specie"
                                                    width="50%"
                                                    value="CACHORRO"
                                                    onChange={(e) => onChange(e.target.value)}
                                                />
                                            )}
                                        />
                                        <S.RadioInputLabel htmlFor="CACHORRO">
                                            Cachorro
                                        </S.RadioInputLabel>
                                    </S.HStack>

                                    <S.HStack style={{ marginBottom: 0 }}>
                                        <Controller
                                            name="type"
                                            control={control}
                                            render={({ field: { onChange } }) => (
                                                <S.Input
                                                    id="GATO"
                                                    type="radio"
                                                    name="specie"
                                                    width="50%"
                                                    value="GATO"
                                                    onChange={(e) => onChange(e.target.value)}
                                                />
                                            )}
                                        />
                                        <S.RadioInputLabel htmlFor="GATO">Gato</S.RadioInputLabel>
                                    </S.HStack>
                                </S.HStack>

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
                                            type="text"
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
                                            width="100%"
                                            type="text"
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
                            <S.HStack style={{ marginRight: "5%" }}>
                                <S.Label style={{ marginRight: "17%" }}>Telefone:</S.Label>

                                <S.InputWrapper>
                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <S.Input
                                                type="text"
                                                width="100%"
                                                value={value}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 14) return;

                                                    return onChange(
                                                        maskPhoneNumber(e.target.value)
                                                    );
                                                }}
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
                                                type="text"
                                                width="90%"
                                                value={value}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 14) return;
                                                    return onChange(maskCpf(e.target.value));
                                                }}
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

            <S.Button
                onClick={handleSubmit(handleApiCall)}
                disable={isLoading}
            >
                {isLoading ? <Loading height="100%" /> : "CADASTRAR"}
            </S.Button>
        </S.Container>
    );
}
