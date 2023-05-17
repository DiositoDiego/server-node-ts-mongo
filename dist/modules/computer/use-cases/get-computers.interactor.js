"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComputersInteractor = void 0;
class GetComputersInteractor {
    constructor(computerRepository) {
        this.computerRepository = computerRepository;
    }
    execute() {
        return this.computerRepository.findAll();
    }
}
exports.GetComputersInteractor = GetComputersInteractor;
