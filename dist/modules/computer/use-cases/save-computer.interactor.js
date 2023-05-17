"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveComputerInteractor = void 0;
class SaveComputerInteractor {
    constructor(computerRepository) {
        this.computerRepository = computerRepository;
    }
    execute(computer) {
        return this.computerRepository.save(computer);
    }
}
exports.SaveComputerInteractor = SaveComputerInteractor;
