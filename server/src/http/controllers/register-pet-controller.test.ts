import request from 'supertest'
import { app } from '../../app'
import { describe, it, expect } from 'vitest'

describe('Register Pet (e2e)', () => {

    it('Should be able to register pet', async () => {
        const response = await request(app)
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
        expect(response.statusCode).toEqual(201)
    })
})
