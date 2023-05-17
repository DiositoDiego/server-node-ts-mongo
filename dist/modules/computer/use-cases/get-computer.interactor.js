"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComputerInteractor = void 0;
class GetComputerInteractor {
    constructor(computerRepository) {
        this.computerRepository = computerRepository;
    }
    execute(computer) {
        return this.computerRepository.findById(computer.id);
    }
}
exports.GetComputerInteractor = GetComputerInteractor;
