import { DataSource, Repository } from "typeorm";
import { app } from "../../app";
import { AppDataSource } from "../../data-source";
import { Pet } from "../../entities/pet.entity";
import { invalidMockedPet, mockedPetRequest } from "../mocks/pet.mocks";
import request from "supertest";

describe("Create pet route tests", () => {
  let connnection: DataSource;
  const baseUrl: string = "/pets";
  const petRepository: Repository<Pet> = AppDataSource.getRepository(Pet);

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connnection = res))
      .catch((err) => console.log(err));
  });

  beforeEach(async () => {
    const pets = await petRepository.find();
    await petRepository.remove(pets);
  });

  afterAll(async () => {
    await connnection.destroy();
  });

  it("POST/pets - Should be able to create pet", async () => {
    const newPet = await request(app).post(baseUrl).send(mockedPetRequest);

    expect(newPet.status).toBe(201);
    expect(newPet.body).toHaveProperty("id");
    expect(newPet.body).toHaveProperty("name");
    expect(newPet.body).toHaveProperty("age");
    expect(newPet.body).toHaveProperty("species");
    expect(newPet.body).toHaveProperty("breed");
    expect(newPet.body).toHaveProperty("image");
    expect(newPet.body).toHaveProperty("tutorName");
    expect(newPet.body).toHaveProperty("phoneNumber");

    const pets = await petRepository.find();

    expect(pets).toHaveLength(1);
  });

  it("POST/pets - Should not be able to create pet | Invalid Body", async () => {
    const newPet = await request(app).post(baseUrl).send(invalidMockedPet);

    expect(newPet.status).toBe(400);
    expect(newPet.body).toHaveProperty("message");

    const pets = await petRepository.find();

    expect(pets).toHaveLength(0);
  });
});
