import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

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
    const [isEditing, setIsEditing] = useState(false);

    const { state, pathname } = useLocation();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
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

    async function handleDelete() {
        try {
            await petApi.remove(state.id);

            toast.success("Remoção realizada!", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            navigate("/pets");
        } catch (error) {
            toast.error("🥺 Houve algum erro. Tente novamente mais tarde 😿", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            console.log(error);
        }
    }

    function toggleEdit() {
        setIsEditing(!isEditing);
    }

    async function handleApiCall(body) {
        setIsLoading(true);

        try {
            const ownerBody = {
                name: body.ownerName,
                phoneNumber: unmaskPhoneNumber(body.phoneNumber),
                CPF: unmaskCpf(body.CPF),
            };

            const ownerData = await ownerApi.createOrUpdateOwner(ownerBody);

            if (isEditing) {
                const response = await updatePetDataById(body, state.id);

                navigate("/viwePet", { state: { ...response } });
            } else {
                const response = await postPetData(body, ownerData.id);

                navigate("/viwePet", { state: { ...response } });
            }
        } catch (error) {
            toast.error("🥺 Houve algum erro. Tente novamente mais tarde 😿", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            console.log(error);
        } finally {
            setIsLoading(false);
            setIsEditing(false);
        }
    }

    async function updatePetDataById(petData, id) {
        try {
            const body = {
                name: petData.name,
                type: petData.type,
                breed: petData.breed,
                age: petData.age,
            };

            if (body.name === state.name) {
                delete body.name;
            }
            if (body.type === state.type) {
                delete body.type;
            }
            if (body.breed === state.breed) {
                delete body.breed;
            }
            if (body.age === state.age) {
                delete body.age;
            }

            if (Object.keys(body).length === 0) {
                return state;
            }

            const response = await petApi.patch(body, id);

            toast.success("🐶 Atualização realizada com sucesso 🐱", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return response;
        } catch (error) {
            throw error;
        }
    }

    async function postPetData(petData, ownerId) {
        try {
            const body = {
                name: petData.name,
                type: petData.type,
                breed: petData.breed,
                age: petData.age,
                ownerId,
            };

            const response = await petApi.post(body);

            toast.success("🐶 Cadastro realizado com sucesso 🐱", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            return response;
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        if (pathname === "/register") {
            reset();
        }
    }, [pathname]);

    useEffect(() => {
        if (isEditing) {
            setValue("name", state.name);
            setValue("type", state.type);
            setValue("breed", state.breed);
            setValue("age", state.age);
            setValue("ownerName", state.owner.name);
            setValue("phoneNumber", maskPhoneNumber(state.owner.phoneNumber));
            setValue("CPF", maskCpf(state.owner.CPF));
        }
    }, [isEditing]);

    return (
        <S.Container>
            <S.PetForm>
                <S.Heading>Dados do pet</S.Heading>

                <S.InputsContainer>
                    <S.Image src={CatDogSvg} />

                    <S.VStack>
                        <S.HStack>
                            <S.Label>Nome:</S.Label>

                            <S.PetText visible={state !== null && isEditing === false}>
                                {state ? state.name : ""}
                            </S.PetText>
                            <S.InputWrapper visible={state === null || isEditing === true}>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <S.Input
                                            type="text"
                                            width="100%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                            disabled={isLoading}
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

                            <S.PetText visible={state !== null && isEditing === false}>
                                {state ? state.type : ""}
                            </S.PetText>
                            <S.InputWrapper visible={state === null || isEditing === true}>
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
                                            render={({ field: { onChange, value } }) => (
                                                <S.Input
                                                    id="CACHORRO"
                                                    type="radio"
                                                    name="specie"
                                                    width="50%"
                                                    value="CACHORRO"
                                                    checked={value === "CACHORRO" ? true : false}
                                                    onChange={(e) => onChange(e.target.value)}
                                                    disabled={isLoading}
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
                                            render={({ field: { onChange, value } }) => (
                                                <S.Input
                                                    id="GATO"
                                                    type="radio"
                                                    name="specie"
                                                    width="50%"
                                                    value="GATO"
                                                    checked={value === "GATO" ? true : false}
                                                    onChange={(e) => onChange(e.target.value)}
                                                    disabled={isLoading}
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

                            <S.PetText visible={state !== null && isEditing === false}>
                                {state ? state.breed : ""}
                            </S.PetText>
                            <S.InputWrapper visible={state === null || isEditing === true}>
                                <Controller
                                    name="breed"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <S.Input
                                            type="text"
                                            width="100%"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                            disabled={isLoading}
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

                            <S.PetText visible={state !== null && isEditing === false}>
                                {state ? state.age : ""}
                            </S.PetText>
                            <S.InputWrapper visible={state === null || isEditing === true}>
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
                                            disabled={isLoading}
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
                            <S.Label>Nome:</S.Label>

                            <S.PetText visible={state !== null && isEditing === false}>
                                {state ? state.owner.name : ""}
                            </S.PetText>
                            <S.InputWrapper visible={state === null || isEditing === true}>
                                <Controller
                                    name="ownerName"
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <S.Input
                                            width="100%"
                                            type="text"
                                            value={value}
                                            onChange={(e) => onChange(e.target.value)}
                                            disabled={isLoading}
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
                                <S.Label>Telefone:</S.Label>

                                <S.PetText visible={state !== null && isEditing === false}>
                                    {state ? maskPhoneNumber(state.owner.phoneNumber) : ""}
                                </S.PetText>
                                <S.InputWrapper visible={state === null || isEditing === true}>
                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <S.Input
                                                type="text"
                                                width="100%"
                                                value={value}
                                                onChange={(e) => {
                                                    if (e.target.value.length > 15) return;

                                                    return onChange(
                                                        maskPhoneNumber(e.target.value)
                                                    );
                                                }}
                                                disabled={isLoading}
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

                                <S.PetText visible={state !== null && isEditing === false}>
                                    {state ? maskCpf(state.owner.CPF) : ""}
                                </S.PetText>
                                <S.InputWrapper visible={state === null || isEditing === true}>
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
                                                disabled={isLoading}
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

            <S.HStack>
                <S.Button
                    onClick={() => handleDelete()}
                    style={{
                        marginRight: "20px",
                        backgroundColor: "#FF0000",
                        display: state ? "flex" : "none",
                    }}
                    disable={isLoading}
                >
                    DELETAR
                </S.Button>
                <S.Button
                    onClick={() => toggleEdit()}
                    style={{
                        marginRight: "20px",
                        backgroundColor: "#FFFFFF",
                        color: "#0077b6",
                        display: state ? "flex" : "none",
                    }}
                    disable={isLoading}
                >
                    {isEditing ? "CANCELAR" : "EDITAR"}
                </S.Button>
                <S.Button
                    onClick={handleSubmit(handleApiCall)}
                    disable={isLoading || (state !== null && isEditing === false)}
                >
                    {isLoading ? <Loading height="100%" /> : state ? "ATUALIZAR" : "CADASTRAR"}
                </S.Button>
            </S.HStack>
        </S.Container>
    );
}
