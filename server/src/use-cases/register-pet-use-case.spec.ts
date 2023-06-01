import { InMemoryPetsRepository } from '@/repositories/in-memory/pet/in-memory-pets-repository'
import {beforeEach, describe, expect, it} from 'vitest'
import { RegisterPetUseCase } from './register-pet-use-case'

let petsRepository: InMemoryPetsRepository
let sut:RegisterPetUseCase


describe('Register Pet UseCase', () => {
    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new RegisterPetUseCase(petsRepository)
    })
    it('Should be able to register pet', async () => {
        const pet = await sut.register({
            name: 'any_name',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
    })    
    expect(pet.id).toEqual(expect.any(String))
    })
})