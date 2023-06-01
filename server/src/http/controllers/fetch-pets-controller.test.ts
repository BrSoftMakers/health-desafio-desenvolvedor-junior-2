import request from 'supertest'
import { app } from '../../app'
import { describe, it, expect } from 'vitest'

const makeFakePet = {
    name: 'any_name',
    age: 5,
    imageUrl: 'any_imageUrl',
    race: 'any_race',
    type: 'cachorro',
    petOwner: 'any_pet_owner',
    telephone: '123-456'
}

describe('Fetch Pets (e2e)', () => {

    it('Should be able return all pet', async () => {
        await request(app)
            .post('/pet')
            .send(makeFakePet)
        await request(app)
            .post('/pet')
            .send(makeFakePet)
        const pets = await request(app)
            .get('/pet')
            .send()    
        expect(pets.statusCode).toEqual(200)
        expect(pets.body).toHaveLength(2)
        expect(pets.body).toEqual([
            expect.objectContaining({ name: 'any_name' }),
            expect.objectContaining({ name: 'any_name' })
        ])
    })
})
