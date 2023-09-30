import api from "./api";

export interface Pets {
    petId?: number;
    photoLink: string,
    petName: string;
    petAge: number;
    petType: string;
    petRace: string;
    petOwner: string;
    phoneOwner: string;
}

export const createPet = async (item: Pets): Promise<Pets> => {
    const response = await api.post<Pets>("/pets", item);
    return response.data
}

export const getPets = async (): Promise<Pets[]> => {
    const response = await api.get<Pets[]>("/pets");
    return response.data;
}

export const getPetpetId = async (petId: number): Promise<Pets> => {
    const response = await api.get<Pets>(`/pets/${petId}`);
    return response.data;
}

export const updatePet = async (item: Pets): Promise<Pets> => {
    const response = await api.put<Pets>(`/pets/${item.petId}`, item);
    return response.data;
}

export const deletePet = async (petId: number | undefined): Promise<Pets> => {
    const response = await api.delete<Pets>(`/pets/${petId}`);
    return response.data;
}

export const createOrUpdatePet = async (item: Pets): Promise<Pets> => {
    if (!item.petId) {
        return await createPet(item);
    } else {
        return await updatePet(item);
    }
}


