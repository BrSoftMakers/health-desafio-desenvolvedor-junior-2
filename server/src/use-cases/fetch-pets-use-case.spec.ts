import { InMemoryPetsRepository } from '@/repositories/in-memory/pet/in-memory-pets-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import {FetchPetsUseCase  } from './fetch-pets-use-case'

let petsRepository: InMemoryPetsRepository
let sut: FetchPetsUseCase


describe('Fetch Pets UseCase', () => {
    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new FetchPetsUseCase(petsRepository)
    })
    it('Should be able to fetch pets history', async () => {
        await petsRepository.create({
            name: 'any_name01',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
        })
        await petsRepository.create({
            name: 'any_name02',
            age: 5,
            imageUrl: 'any_imageUrl',
            race: 'any_race',
            type: 'cachorro',
            petOwner: 'any_pet_owner',
            telephone: '123-456'
        })
        const pet = await sut.findMany()
        expect(pet).toHaveLength(2)
        expect(pet).toEqual([
            expect.objectContaining({ name: 'any_name01' }),
            expect.objectContaining({ name: 'any_name02' })     
        ])
    })
})