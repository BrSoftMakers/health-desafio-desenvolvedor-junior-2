import request from 'supertest'
import { app } from '../../app'
import { describe, it, expect } from 'vitest'
import { prisma } from '@/lib/prisma'

describe('Update Pet (e2e)', () => {

    it('Should be able to update pet', async () => {
        await request(app)
            .post('/pet')
            .send({
                name: 'any_name',
                age: 5,
                imageUrl: 'any_imageUrl',
                race: 'any_race',
                type: 'cachorro',
                petOwner: 'any_pet_owner',
                telephone: '123-456'
            })
        let pet = await prisma.pet.findFirstOrThrow()
        const response = await request(app)
            .patch(`/pet/${pet.id}`)
            .send({
                name: 'any_name',
                age: 2,
                imageUrl: 'any_imageUrl',
                race: 'any_race',
                type: 'gato',
                petOwner: 'any_pet_owner',
                telephone: '123-456'
            })
        pet = await prisma.pet.findFirstOrThrow({
            where: { id: pet.id }
        })
        expect(response.statusCode).toEqual(204)
        expect(pet.type).toEqual('gato')
    })
})
