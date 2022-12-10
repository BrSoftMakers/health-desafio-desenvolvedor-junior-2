import axios from "axios";
export const http = axios.create({
    baseURL: "http://localhost:3000"
})

type Pet = {
    nome: string;
    idade: number;
    tipo: number;
    raca: string;
    dono: string;
    telefone: string;
}



export const getAllPets = async () => {
    const response = await http.get('/pets');
    return await response.data;
}

export const getPetById = async (id: string) => {
    const response = await http.get(`/pets/${id}`);
    return await response.data;
}

export const addPet = async ({ nome, idade, tipo, raca, dono, telefone }: Pet) => {
    const response = await http.post('/pets', {
        nome,
        idade,
        tipo,
        raca,
        dono,
        telefone
    })
    return response.data;
}

export const editPet = async (id: string, { nome, idade, tipo, raca, dono, telefone }: Pet) => {
    const response = await http.put(`/pets/${id}`, {
        nome,
        idade,
        tipo,
        raca,
        dono,
        telefone
    })
}

export const deletePet = async (id: string) => {
    const response = await http.delete(`/pets/${id}`)
    return await response.data;
}