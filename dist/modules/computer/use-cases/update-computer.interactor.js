"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComputerInteractor = void 0;
class UpdateComputerInteractor {
    constructor(computerRepository) {
        this.computerRepository = computerRepository;
    }
    execute(computer) {
        return this.computerRepository.update(computer);
    }
}
exports.UpdateComputerInteractor = UpdateComputerInteractor;
