"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComputerInteractor = void 0;
class DeleteComputerInteractor {
    constructor(computerRepository) {
        this.computerRepository = computerRepository;
    }
    execute(id) {
        return this.computerRepository.delete(id);
    }
}
exports.DeleteComputerInteractor = DeleteComputerInteractor;
