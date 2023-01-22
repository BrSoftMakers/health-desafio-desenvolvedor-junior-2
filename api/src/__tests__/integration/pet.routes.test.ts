import request from 'supertest';
import app from '../../app';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Pet } from '../../entities/pet.entity';
import { mockedPet, mockedUpdatedPet } from '../mocks/integration/pet.mock';

describe('/pets', () => {
  let connection: DataSource;
  const petRepository = AppDataSource.getRepository(Pet);

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error('Error during Data Source initialization', err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test('POST /pets - Must be able to create a pet', async () => {
    const response = await request(app).post('/pets').send(mockedPet);

    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('age');
    expect(response.body).toHaveProperty('type');
    expect(response.body).toHaveProperty('breed');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).toHaveProperty('updatedAt');
    expect(response.body.owner).toStrictEqual(
      expect.objectContaining({
        phone_number: expect.any(String),
        name: expect.any(String),
        id: expect.any(String),
      })
    );
    expect(response.status).toBe(201);

    const [pets, amount] = await petRepository.findAndCount();
    expect(amount).toBe(1);
  });

  test('GET /pets - Must be able to list pets', async () => {
    const response = await request(app).get('/pets');

    expect(response.body).toHaveLength(1);
  });

  test('GET /pets/:id - Return a pet', async () => {
    const petReturned = await request(app).get('/pets');
    const petIdReturned = petReturned.body[0].id;
    const response = await request(app).get(`/pets/${petIdReturned}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toContain('Ichigo');
  });

  test('PATCH /pets/:id - Should be able to update a pet', async () => {
    const petTobeUpdate = await request(app)
      .get('/pets')
      .send(mockedUpdatedPet);

    const response = await request(app).patch(
      `/pets/${petTobeUpdate.body[0].id}`
    );

    const petUpdated = await request(app).get('/pets').send(mockedUpdatedPet);

    expect(response.status).toBe(200);
    expect(petUpdated.body[0].name).toEqual('Ichigo');
  });

  test('DELETE /pets/:id - Must be able to delete', async () => {
    const petDeleted = await request(app).post('/pets').send(mockedPet);
    const response = await request(app).delete(`/pets/${petDeleted.body.id}`);
    const findPet = await request(app).get('/pets');

    expect(response.status).toBe(204);
    expect(findPet.body).toHaveLength(1);
  });
});
