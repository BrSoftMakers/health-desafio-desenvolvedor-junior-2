import { InMemoryPetsRepository } from '@/repositories/in-memory/pet/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { UpdatePetUseCase } from './update-pet-use-case'
import { ResourceNotFoundError } from './error/resource-not-found-error'

let petsRepository: InMemoryPetsRepository
let sut: UpdatePetUseCase

describe('Update Pet UseCase', () => {
    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new UpdatePetUseCase(petsRepository)
    })
    it('Should be able to update pet', async () => {
       const pet =  await petsRepository.create({
            name: 'any_name',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
        })
        const updatedPet = await sut.update({
            id: pet.id,    
            name: 'any_name',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'gato',
            petOwner: 'any_pet_owner',
            telephone: '123-456'    
        }) 
        expect(updatedPet.id).toEqual(expect.any(String))
        expect(petsRepository.pets[0].type).toEqual('gato')
    })
    it('Should  return 400 if pet not found', async () => {
        await expect(async () => sut.update({
            id: 'invalid_id',
            name: 'any_name',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
        })).rejects.toBeInstanceOf(ResourceNotFoundError)
    })
})