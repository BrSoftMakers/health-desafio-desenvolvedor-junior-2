
export interface PetsPropsRequest {
    name: string
    age: number
    imageUrl: string
    type: 'gato' | 'cachorro',
    race: string
    telephone: string
    petOwner: string      
}
export interface PetsPropsResponse {
    id: string    
    name: string
    age: number
    imageUrl: string
    type: 'gato' | 'cachorro',
    race: string
    telephone: string
    petOwner: string
}

export interface UpdatePetsPropsRequest {
    id: string
    name: string
    age: number
    imageUrl: string
    type: 'gato' | 'cachorro',
    race: string
    telephone: string
    petOwner: string
}

export interface PetsRepository {
    findById: (id: string) => Promise<PetsPropsResponse | null>
    findMany: () => Promise<PetsPropsResponse[]>
    update: (data: UpdatePetsPropsRequest) => Promise<PetsPropsResponse>
    create: (data: PetsPropsRequest) => Promise<PetsPropsResponse>
    delete: (id: string) => Promise<void>   
}