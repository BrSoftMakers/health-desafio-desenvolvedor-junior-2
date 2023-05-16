import request from 'supertest'
import { app } from '../../app'
import { describe, it, expect } from 'vitest'
import { prisma } from '@/lib/prisma'

const makeFakePet = {
    name: 'any_name',
    age: 5,
    imageUrl: 'any_imageUrl',
    race: 'any_race',
    type: 'cachorro',
    petOwner: 'any_pet_owner',
    telephone: '123-456'
}

describe('Delete Pets (e2e)', () => {

    it('Should be able delete pet', async () => {
        await request(app)
            .post('/pet')
            .send(makeFakePet)
        await request(app)
            .post('/pet')
            .send(makeFakePet)
        let pet = await prisma.pet.findFirstOrThrow()
        const pets = await request(app)
            .delete(`/pet/${pet.id}`)
            .send()
        expect(pets.statusCode).toEqual(204)
        
    })
})
