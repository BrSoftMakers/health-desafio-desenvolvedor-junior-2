import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface childrenProps {
    children: ReactNode;
}

interface PetPropsResponse {
    id?: string
    name: string
    age: number
    imageUrl: string
    type: 'gato' | 'cachorro',
    race: string
    telephone: string
    petOwner: string
}
interface PetPropsRequest {
    name: string
    age: number
    imageUrl: string
    type: 'gato' | 'cachorro',
    race: string
    telephone: string
    petOwner: string
}
 interface ModalProps {
    id?: string | undefined
    name: string | undefined
    age: number | undefined
    imageUrl: string | undefined
    type: 'gato' | 'cachorro' | undefined
    race: string | undefined
    telephone: string | undefined
    petOwner: string | undefined
}

type PetHouseContextType = {
    pets: PetPropsResponse[];
    pet: PetPropsResponse | undefined;    
    handleRegisterNewPet: (data: PetPropsRequest) => Promise<void>
    handleFindPetById: (id: string) => Promise<void>
    handleDeletePet: (id: string) => Promise<void>
    handleUpdatePet: (data: ModalProps) => Promise<void>
}

export const PetHouseContext = createContext({} as PetHouseContextType)

export function PetHouseProvider({children}: childrenProps) {
    const [pets, setPets] = useState<PetPropsResponse[]>([])
    const [pet, setPet] = useState<PetPropsResponse>()
    const fetchPets = async () => {
        const response = await api.get('/pet')
        setPets(response.data)
    }

    const handleRegisterNewPet = async (data: PetPropsRequest ) => {
        await api.post('/pet', data)
        
    }

    const handleFindPetById = async (id: string) => {
        const response = await api.get(`/pet/${id}`)
        setPet(response.data)    
    }

    const handleDeletePet = async (id: string) => {
        await api.delete(`/pet/${id}`)

    }

    const handleUpdatePet = async (data: ModalProps ) => {
        await api.patch(`/pet/${data.id}`, data) 
    }
    useEffect(() => {
        fetchPets()
    }, [])
return(
    <PetHouseContext.Provider value={{ 
        pets, 
        pet, 
        handleRegisterNewPet,
        handleFindPetById,
        handleDeletePet,
        handleUpdatePet
    }}>
        {children}
    </PetHouseContext.Provider>
)
}