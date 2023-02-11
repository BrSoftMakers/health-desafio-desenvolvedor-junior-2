import { DataSource, Repository } from "typeorm";
import { app } from "../../app";
import { AppDataSource } from "../../data-source";
import { Pet } from "../../entities/pet.entity";
import { mockedPetRequest } from "../mocks/pet.mocks";
import request from "supertest";

describe("Create pet route tests", () => {
  let connnection: DataSource;
  const baseUrl: string = "/pets";
  const petRepository: Repository<Pet> = AppDataSource.getRepository(Pet);
  let newPetId = "";

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connnection = res))
      .catch((err) => console.log(err));

    newPetId = await request(app)
      .post(baseUrl)
      .send(mockedPetRequest)
      .then((res) => res.body.id);
  });

  afterAll(async () => {
    await connnection.destroy();
  });

  it("DELETE/pets/:id - Should  be able to delete pet", async () => {
    const deletedPet = await request(app).delete(`${baseUrl}/${newPetId}`);
    const pets = await petRepository.find();

    expect(deletedPet.status).toBe(204);
    expect(pets).toHaveLength(0);
  });

  it("DELETE/pets/:id -  should not be able to delete pet with id other than type uuid", async () => {
    const petUpdeted = await request(app).delete(`${baseUrl}/6534`);

    expect(petUpdeted.status).toBe(406);
    expect(petUpdeted.body).toHaveProperty("message");
    expect(petUpdeted.body.message).toEqual(
      "invalid input syntax for type uuid"
    );
  });

  it("DELETE/pets/:id -  should not be able to delete pet with invalid id", async () => {
    const petUpdeted = await request(app).delete(
      `${baseUrl}/9425ef16-e285-4767-905b-72bf208b80e7`
    );

    expect(petUpdeted.status).toBe(404);
    expect(petUpdeted.body).toHaveProperty("message");
    expect(petUpdeted.body.message).toEqual("Pet not found!");
  });
});
