import { InMemoryPetsRepository } from '@/repositories/in-memory/pet/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { DeletePetUseCase } from './delete-pet-use-case'

let petsRepository: InMemoryPetsRepository
let sut: DeletePetUseCase


describe('Delete Pet UseCase', () => {
    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new DeletePetUseCase(petsRepository)
    })
    it('Should be able to delete pet', async () => {
        await petsRepository.create({
            name: 'any_name01',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
        })
        const pet = await petsRepository.create({
            name: 'any_name02',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
        })
        await sut.delete(pet.id)
        expect(petsRepository.pets).toHaveLength(1)
    })
})