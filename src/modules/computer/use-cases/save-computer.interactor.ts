import { UseCase } from "../../../kernel/contracts";
import { ComputerRepository } from "./ports/computer.repository";
import { SaveComputerDto } from "../adapters/dto/save-computer";
import { Computer } from "../entities/computer";

export class SaveComputerInteractor implements UseCase<SaveComputerDto, Computer>{
    constructor(private readonly computerRepository: ComputerRepository) {}

    execute(computer: SaveComputerDto): Promise<Computer> {
        return this.computerRepository.save(computer);
    }
}