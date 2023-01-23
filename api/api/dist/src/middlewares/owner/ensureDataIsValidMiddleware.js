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
exports.ensureDataIsValidMiddleware = void 0;
const data_source_1 = require("../../data-source");
const petOwner_entity_1 = require("../../entities/petOwner.entity");
const App_error_1 = require("../../errors/App.error");
const ensureDataIsValidMiddleware = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ensureBodyUser = yield schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    });
    const userRepository = data_source_1.AppDataSource.getRepository(petOwner_entity_1.Owner);
    const ensureUserExist = yield userRepository.findOneBy({
        phone_number: ensureBodyUser.phone_number,
    });
    if (ensureUserExist) {
        throw new App_error_1.AppError('Existing user', 409);
    }
    next();
});
exports.ensureDataIsValidMiddleware = ensureDataIsValidMiddleware;
//# sourceMappingURL=ensureDataIsValidMiddleware.js.map