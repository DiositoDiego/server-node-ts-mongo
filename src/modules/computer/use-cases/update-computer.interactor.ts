import { UseCase } from "../../../kernel/contracts";
import { UpdateComputerDto } from "../adapters/dto/update-computer";
import { Computer } from "../entities/computer";
import { ComputerRepository } from "./ports/computer.repository";

export class UpdateComputerInteractor implements UseCase<UpdateComputerDto, Computer> {
    constructor(private readonly computerRepository: ComputerRepository) { }

    execute(computer: UpdateComputerDto): Promise<Computer> {
        return this.computerRepository.update(computer);
    }
}