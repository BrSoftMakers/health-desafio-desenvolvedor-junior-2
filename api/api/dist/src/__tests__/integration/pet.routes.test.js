"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
const data_source_1 = require("../../data-source");
const pet_entity_1 = require("../../entities/pet.entity");
const pet_mock_1 = require("../mocks/integration/pet.mock");
describe('/pets', () => {
    let connection;
    const petRepository = data_source_1.AppDataSource.getRepository(pet_entity_1.Pet);
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then((res) => {
            connection = res;
        })
            .catch((err) => {
            console.error('Error during Data Source initialization', err);
        });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    test('POST /pets - Must be able to create a pet', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post('/pets').send(pet_mock_1.mockedPet);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('age');
        expect(response.body).toHaveProperty('type');
        expect(response.body).toHaveProperty('breed');
        expect(response.body).toHaveProperty('createdAt');
        expect(response.body).toHaveProperty('updatedAt');
        expect(response.body.owner).toStrictEqual(expect.objectContaining({
            phone_number: expect.any(String),
            name: expect.any(String),
            id: expect.any(String),
        }));
        expect(response.status).toBe(201);
        const [pets, amount] = yield petRepository.findAndCount();
        expect(amount).toBe(1);
    }));
    test('GET /pets - Must be able to list pets', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).get('/pets');
        expect(response.body).toHaveLength(1);
    }));
    test('GET /pets/:id - Return a pet', () => __awaiter(void 0, void 0, void 0, function* () {
        const petReturned = yield (0, supertest_1.default)(app_1.default).get('/pets');
        const petIdReturned = petReturned.body[0].id;
        const response = yield (0, supertest_1.default)(app_1.default).get(`/pets/${petIdReturned}`);
        expect(response.status).toBe(200);
        expect(response.body.name).toContain('Ichigo');
    }));
    test('PATCH /pets/:id - Should be able to update a pet', () => __awaiter(void 0, void 0, void 0, function* () {
        const petTobeUpdate = yield (0, supertest_1.default)(app_1.default)
            .get('/pets')
            .send(pet_mock_1.mockedUpdatedPet);
        const response = yield (0, supertest_1.default)(app_1.default).patch(`/pets/${petTobeUpdate.body[0].id}`);
        const petUpdated = yield (0, supertest_1.default)(app_1.default).get('/pets').send(pet_mock_1.mockedUpdatedPet);
        expect(response.status).toBe(200);
        expect(petUpdated.body[0].name).toEqual('Ichigo');
    }));
    test('DELETE /pets/:id - Must be able to delete', () => __awaiter(void 0, void 0, void 0, function* () {
        const petDeleted = yield (0, supertest_1.default)(app_1.default).post('/pets').send(pet_mock_1.mockedPet);
        const response = yield (0, supertest_1.default)(app_1.default).delete(`/pets/${petDeleted.body.id}`);
        const findPet = yield (0, supertest_1.default)(app_1.default).get('/pets');
        expect(response.status).toBe(204);
        expect(findPet.body).toHaveLength(1);
    }));
});
//# sourceMappingURL=pet.routes.test.js.map