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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const pet_entity_1 = require("../../entities/pet.entity");
const App_error_1 = require("../../errors/App.error");
const petSchema_1 = require("../../schemas/pets/petSchema");
const listPetByIdService = (petId) => __awaiter(void 0, void 0, void 0, function* () {
    const petRepository = data_source_1.AppDataSource.getRepository(pet_entity_1.Pet);
    const findPetId = yield petRepository.findOne({
        where: {
            id: petId,
        },
    });
    if (!findPetId) {
        throw new App_error_1.AppError('Pet not found', 404);
    }
    const returnedPet = petSchema_1.returnInfoPetSchema.validate(findPetId, {
        stripUnknown: true,
    });
    return returnedPet;
});
exports.default = listPetByIdService;
//# sourceMappingURL=listPetById.service.js.map