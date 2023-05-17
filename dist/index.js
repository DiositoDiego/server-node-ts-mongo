"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const computer_controller_1 = __importDefault(require("./modules/computer/adapters/computer.controller"));
const dbconfig_1 = __importDefault(require("./utils/dbconfig"));
const app = (0, express_1.default)();
const cors = require('cors');
(0, dbconfig_1.default)();
app.use(express_1.default.json());
app.use(cors({
    origin: '*'
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Credentials", "true");
    res.header("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Acces-Control-Allow-Headers", "Content-Type, Accept, Authorization, Access-Control-Allow-Request-Method");
    next();
});
app.get('/ping', (req, res) => {
    console.log('pinged');
    res.send('pong');
});
app.use('/computers', computer_controller_1.default);
app.listen(3001, () => {
    console.log('Server running on port 3001');
});
