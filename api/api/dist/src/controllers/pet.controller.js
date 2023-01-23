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
exports.deletePetsController = exports.updatedPetsController = exports.listPetByIdController = exports.listPetsController = exports.createPetsController = void 0;
const createPets_service_1 = __importDefault(require("../services/pets/createPets.service"));
const deletePets_service_1 = __importDefault(require("../services/pets/deletePets.service"));
const listAllPets_service_1 = __importDefault(require("../services/pets/listAllPets.service"));
const listPetById_service_1 = __importDefault(require("../services/pets/listPetById.service"));
const updatePets_service_1 = __importDefault(require("../services/pets/updatePets.service"));
const createPetsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, type, breed, owner_id } = req.body;
    const newPet = yield (0, createPets_service_1.default)({
        name,
        age,
        type,
        breed,
        owner_id,
    });
    return res.status(201).json(newPet);
});
exports.createPetsController = createPetsController;
const listPetsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const petsList = yield (0, listAllPets_service_1.default)();
    return res.json(petsList);
});
exports.listPetsController = listPetsController;
const listPetByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const petData = yield (0, listPetById_service_1.default)(id);
    return res.status(200).json(petData);
});
exports.listPetByIdController = listPetByIdController;
const updatedPetsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    const updatedPet = yield (0, updatePets_service_1.default)(data, id);
    return res.status(200).json(updatedPet);
});
exports.updatedPetsController = updatedPetsController;
const deletePetsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield (0, deletePets_service_1.default)(id);
    return res.status(204).send();
});
exports.deletePetsController = deletePetsController;
//# sourceMappingURL=pet.controller.js.map