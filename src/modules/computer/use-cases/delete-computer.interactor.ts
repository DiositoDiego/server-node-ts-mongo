import { UseCase } from "../../../kernel/contracts";
import { ResponseApi } from "../../../kernel/types";
import { Computer } from "../entities/computer";
import { ComputerRepository } from "./ports/computer.repository";

export class DeleteComputerInteractor implements UseCase<string, Computer> {
    constructor(private readonly computerRepository: ComputerRepository){}
    
    execute(id: string): Promise<Computer> {
        return this.computerRepository.delete(id);
    }
}