import { UseCase } from "../../../kernel/contracts";
import { Response, Request } from 'express';
import { ComputerRepository } from "./ports/computer.repository";
import { GetComputerDto } from "../adapters/dto/get-computer";
import { Computer } from "../entities/computer";

export class GetComputersInteractor implements UseCase<GetComputerDto, Computer[]>{
    constructor(private readonly computerRepository: ComputerRepository) {}

    execute(): Promise<Computer[]> {
        return this.computerRepository.findAll();
    }
}