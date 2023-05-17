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
exports.ComputerController = void 0;
const express_1 = require("express");
const computer_storage_gateway_1 = require("./computer.storage.gateway");
const get_computers_interactor_1 = require("../use-cases/get-computers.interactor");
const get_computer_interactor_1 = require("../use-cases/get-computer.interactor");
const save_computer_interactor_1 = require("../use-cases/save-computer.interactor");
const update_computer_interactor_1 = require("../use-cases/update-computer.interactor");
const delete_computer_interactor_1 = require("../use-cases/delete-computer.interactor");
const ComputerRouter = (0, express_1.Router)();
class ComputerController {
    static getError() {
        return {
            code: 500,
            message: "Internal Server Error",
            entity: undefined,
            entities: undefined,
            error: true
        };
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new computer_storage_gateway_1.ComputerStorageGateway();
                const interactor = new get_computers_interactor_1.GetComputersInteractor(repository);
                const computers = yield interactor.execute();
                const body = {
                    code: 200,
                    message: "OK",
                    entity: undefined,
                    entities: computers,
                    error: false,
                    count: computers.length
                };
                return res.status(body.code).json(body.entities);
            }
            catch (error) {
                return res.status(this.getError().code).json(this.getError());
            }
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id.toString();
                const repository = new computer_storage_gateway_1.ComputerStorageGateway();
                const interactor = new get_computer_interactor_1.GetComputerInteractor(repository);
                const computer = yield interactor.execute({ id });
                const body = {
                    code: 200,
                    message: "OK",
                    entity: computer,
                    entities: undefined,
                    error: false,
                    count: 1
                };
                return res.status(body.code).json(body.entity);
            }
            catch (error) {
                return res.status(this.getError().code).json(this.getError());
            }
        });
    }
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new computer_storage_gateway_1.ComputerStorageGateway();
                const interactor = new save_computer_interactor_1.SaveComputerInteractor(repository);
                const computer = yield interactor.execute(req.body);
                const body = {
                    code: 200,
                    message: "OK",
                    entity: computer,
                    entities: undefined,
                    error: false,
                    count: 1
                };
                return res.status(body.code).json(body.entity);
            }
            catch (error) {
                return res.status(this.getError().code).json(this.getError());
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new computer_storage_gateway_1.ComputerStorageGateway();
                const interactor = new update_computer_interactor_1.UpdateComputerInteractor(repository);
                let computer = yield interactor.execute(req.body);
                computer = Object.assign(Object.assign({}, computer), { id: req.params.id.toString() });
                const body = {
                    code: 200,
                    message: "OK",
                    entity: computer,
                    entities: undefined,
                    error: false,
                    count: 1
                };
                return res.status(body.code).json(body.entity);
            }
            catch (error) {
                return res.status(this.getError().code).json(this.getError());
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new computer_storage_gateway_1.ComputerStorageGateway();
                const interacttor = new delete_computer_interactor_1.DeleteComputerInteractor(repository);
                const computer = yield interacttor.execute(req.params.id.toString());
                const body = {
                    code: 200,
                    message: "OK",
                    entity: computer,
                    entities: undefined,
                    error: false,
                    count: 1
                };
                return res.status(body.code).json(body.entity);
            }
            catch (error) {
                return res.status(this.getError().code).json(this.getError());
            }
        });
    }
}
exports.ComputerController = ComputerController;
ComputerRouter.get("/", ComputerController.getAll);
ComputerRouter.get("/:id", ComputerController.getOne);
ComputerRouter.post("/", ComputerController.save);
ComputerRouter.put("/:id", ComputerController.update);
ComputerRouter.delete("/:id", ComputerController.delete);
exports.default = ComputerRouter;
