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
const petOwner_entity_1 = require("../../entities/petOwner.entity");
const createOwnerPetService = (ownerData, petId) => __awaiter(void 0, void 0, void 0, function* () {
    const petRepository = data_source_1.AppDataSource.getRepository(pet_entity_1.Pet);
    const ownerRepository = data_source_1.AppDataSource.getRepository(petOwner_entity_1.Owner);
    const createOwner = ownerRepository.create(ownerData);
    yield ownerRepository.save(createOwner);
    yield petRepository.update({
        id: petId,
    }, {
        owner: createOwner,
    });
    return createOwner;
});
exports.default = createOwnerPetService;
//# sourceMappingURL=createOwnerPet.service.js.map