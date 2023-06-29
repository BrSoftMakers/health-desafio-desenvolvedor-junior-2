import { DataSource } from "typeorm";
import { app } from "../../app";
import { AppDataSource } from "../../data-source";
import {
  invalidMockedPet,
  mockedPetRequest,
  mockedPetUpdate,
} from "../mocks/pet.mocks";
import request from "supertest";

describe("Create pet route tests", () => {
  let connnection: DataSource;
  const baseUrl: string = "/pets";
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

  it("PATCH/pets/:id - Should be able to edit pet", async () => {
    const petUpdeted = await request(app)
      .patch(`${baseUrl}/${newPetId}`)
      .send({ ...mockedPetRequest, ...mockedPetUpdate });

    expect(petUpdeted.status).toBe(200);
    expect(petUpdeted.body).toHaveProperty("id");
    expect(petUpdeted.body).toHaveProperty("name");
    expect(petUpdeted.body).toHaveProperty("age");
    expect(petUpdeted.body).toHaveProperty("species");
    expect(petUpdeted.body).toHaveProperty("breed");
    expect(petUpdeted.body).toHaveProperty("image");
    expect(petUpdeted.body).toHaveProperty("tutorName");
    expect(petUpdeted.body).toHaveProperty("phoneNumber");
    expect(petUpdeted.body.name).toEqual(mockedPetUpdate.name);
    expect(petUpdeted.body.tutorName).toEqual(mockedPetUpdate.tutorName);
  });

  it("PATCH/pets/:id - Should not be able to update pet | Invalid Body", async () => {
    const newPet = await request(app)
      .patch(`${baseUrl}/${newPetId}`)
      .send(invalidMockedPet);

    expect(newPet.status).toBe(400);
    expect(newPet.body).toHaveProperty("message");
  });

  it("PATCH/questions/:id -  should not be able to patch pet with id other than type uuid", async () => {
    const petUpdeted = await request(app)
      .patch(`${baseUrl}/6534`)
      .send({ ...mockedPetRequest, ...mockedPetUpdate });

    expect(petUpdeted.status).toBe(406);
    expect(petUpdeted.body).toHaveProperty("message");
    expect(petUpdeted.body.message).toEqual(
      "invalid input syntax for type uuid"
    );
  });

  it("PATCH/questions/:id -  should not be able to patch pet with invalid id", async () => {
    const petUpdeted = await request(app)
      .patch(`${baseUrl}/9425ef16-e285-4767-905b-72bf208b80e7`)
      .send({ ...mockedPetRequest, ...mockedPetUpdate });

    expect(petUpdeted.status).toBe(404);
    expect(petUpdeted.body).toHaveProperty("message");
    expect(petUpdeted.body.message).toEqual("Pet not found!");
  });
});
