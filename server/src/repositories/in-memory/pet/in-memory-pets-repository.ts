import { randomUUID } from 'node:crypto'
import { PetsPropsRequest, PetsPropsResponse, PetsRepository, UpdatePetsPropsRequest } from '../../pets-repository'

export class InMemoryPetsRepository implements PetsRepository {
    public pets: PetsPropsResponse[] = []
    async create(data: PetsPropsRequest): Promise<PetsPropsResponse> {
        const customer = {
            id: randomUUID(),
            name: data.name,
            age: data.age,
            imageUrl: data.imageUrl,
            race: data.race,
            type: data.type,
            telephone: data.telephone,
            petOwner: data.petOwner
        }
        this.pets.push(customer)
        return customer
    }

    async update(data: UpdatePetsPropsRequest): Promise<PetsPropsResponse> {
        const petIndex = this.pets.findIndex(pet => pet.id === data.id)

        if (petIndex >= 0) {
            this.pets[petIndex] = data
        }

        return data
    }

    async findById(id: string): Promise<PetsPropsResponse | null> {
        const pet = this.pets.find(item => item.id === id)

        if (!pet) {
            return null
        }
        return pet
    }

    async findMany(): Promise<PetsPropsResponse[]> {
        const pets = this.pets.map(item => item)
        return pets
    }
    async delete (id: string): Promise<void> {
        const index = this.pets.findIndex(pet => pet.id === id)
        this.pets.splice(index, 1)

    }



}