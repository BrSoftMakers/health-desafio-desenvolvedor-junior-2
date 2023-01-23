"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ownerPet_controller_1 = require("../controllers/ownerPet.controller");
const ensureDataIsValidMiddleware_1 = require("../middlewares/owner/ensureDataIsValidMiddleware");
const ownerSchema_1 = require("../schemas/owner/ownerSchema");
const ownerRoutes = (0, express_1.Router)();
ownerRoutes.post('', (0, ensureDataIsValidMiddleware_1.ensureDataIsValidMiddleware)(ownerSchema_1.ownerSchema), ownerPet_controller_1.createOwnerPetController);
exports.default = ownerRoutes;
//# sourceMappingURL=ownerRoutes.js.map