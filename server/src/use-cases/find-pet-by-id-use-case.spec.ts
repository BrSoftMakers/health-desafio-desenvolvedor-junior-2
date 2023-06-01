import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPetsRepository } from '../repositories/in-memory/pet/in-memory-pets-repository'
import { FindPetByIdUseCase } from './find-pet-by-id-use-case'
import { ResourceNotFoundError } from '../use-cases/error/resource-not-found-error'

let petsRepository: InMemoryPetsRepository
let sut: FindPetByIdUseCase

describe('Get by User Id Use Case', () => {
    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new FindPetByIdUseCase(petsRepository)
    })
    it('Should be able to find pet by id', async () => {
        const registerPet = await petsRepository.create({
            name: 'any_name',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'

        })

        const pet = await sut.findById(registerPet.id)

        expect(pet?.type).toEqual('cachorro')
    })

    it('Should not be able to find pet with wrong id', async () => {
        await expect(async () => sut.findById('not-existing-id'))
            .rejects.toBeInstanceOf(ResourceNotFoundError)
    })
})