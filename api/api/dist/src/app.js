"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
const handleError_1 = __importDefault(require("./errors/handleError"));
const ownerRoutes_1 = __importDefault(require("./routers/ownerRoutes"));
const petsRoutes_1 = __importDefault(require("./routers/petsRoutes"));
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use(express_1.default.json());
app.use('/register', ownerRoutes_1.default);
app.use('/pets', petsRoutes_1.default);
app.use(handleError_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map