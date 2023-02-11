import { DataSource, Repository } from "typeorm";
import { app } from "../../app";
import { AppDataSource } from "../../data-source";
import { mockedPetRequest, mockedPetRequest2 } from "../mocks/pet.mocks";
import request from "supertest";

describe("Create pet route tests", () => {
  let connnection: DataSource;
  const baseUrl: string = "/pets";

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connnection = res))
      .catch((err) => console.log(err));
  });

  afterAll(async () => {
    await connnection.destroy();
  });

  it("GET/pets - Must be able to list pets", async () => {
    await request(app).post(baseUrl).send(mockedPetRequest);
    await request(app).post(baseUrl).send(mockedPetRequest2);

    const response = await request(app).get(baseUrl);

    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("age");
    expect(response.body[0]).toHaveProperty("species");
    expect(response.body[0]).toHaveProperty("breed");
    expect(response.body[0]).toHaveProperty("image");
    expect(response.body[0]).toHaveProperty("tutorName");
    expect(response.body[0]).toHaveProperty("phoneNumber");
  });
});
