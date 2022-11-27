"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./src/data-source");
const routes_1 = __importDefault(require("./src/routes"));
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    // Body parser middleware
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use(cors());
    app.use(express_1.default.json());
    app.use(routes_1.default);
    // Server static assets if in production
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express_1.default.static('client/build'));
        app.get('/*', (req, res) => {
            res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
        });
    }
    return app.listen(PORT);
});
