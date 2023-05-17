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
exports.ComputerStorageGateway = void 0;
const dbconfig_1 = require("../../../utils/dbconfig");
const uuid_1 = require("uuid");
class ComputerStorageGateway {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const computers = yield dbconfig_1.ComputerModel.find()
                    .then((computers) => {
                    computers.map((computer, index) => {
                        computer[index] = {
                            id: computer._id,
                            numSerie: computer.numSerie,
                            modelo: computer.modelo,
                            iduser: computer.iduser
                        };
                    });
                    return computers;
                }).catch(() => {
                    throw new Error("Error al obtener las computadoras");
                });
                return computers;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al obtener las computadoras");
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const computer = yield dbconfig_1.ComputerModel.findOne({
                    _id: id
                }).then((computer) => {
                    return {
                        id: computer._id,
                        numSerie: computer.numSerie,
                        modelo: computer.modelo,
                        iduser: computer.iduser
                    };
                }).catch(() => {
                    throw new Error("Error al obtener las computadoras");
                });
                return computer;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al obtener la computadora");
            }
        });
    }
    save(computer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield dbconfig_1.ComputerModel.create(Object.assign({ _id: (0, uuid_1.v4)() }, computer));
                const computer1 = { id: response._id, numSerie: response.numSerie, modelo: response.modelo, iduser: response.iduser };
                return computer1;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al guardar la computadora");
            }
        });
    }
    update(computer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield dbconfig_1.ComputerModel.findByIdAndUpdate(computer.id, computer)
                    .then((computer) => computer);
                const computer1 = { id: response.id, numSerie: response.numSerie, modelo: response.modelo, iduser: response.iduser };
                return computer1;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al actualizar la computadora");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield dbconfig_1.ComputerModel.findByIdAndDelete(id)
                    .then((computer) => computer);
                const computer = { id: response.id, numSerie: response.numSerie, modelo: response.modelo, iduser: response.iduser };
                return computer;
            }
            catch (error) {
                console.log(error);
                throw new Error("Error al eliminar la computadora");
            }
        });
    }
}
exports.ComputerStorageGateway = ComputerStorageGateway;
