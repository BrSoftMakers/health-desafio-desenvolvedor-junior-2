import request from 'supertest'
import { app } from '../../app'
import { describe, it, expect } from 'vitest'
import { prisma } from '@/lib/prisma'

describe('Find Pet By ID (e2e)', () => {

    it('Should be able find pet by id', async () => {
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
        let response = await prisma.pet.findFirstOrThrow()
        const pet = await request(app)
            .get(`/pet/${response.id}`)
        expect(pet.statusCode).toEqual(200)
        expect(pet.body).toEqual(
            expect.objectContaining({ type: 'cachorro' })
        )
    })
})
