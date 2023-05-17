import { UseCase } from "../../../kernel/contracts";
import { ResponseApi } from "../../../kernel/types";
import { GetComputerDto } from "../adapters/dto/get-computer";
import { Computer } from "../entities/computer";
import { ComputerRepository } from "./ports/computer.repository";
import {Response, Request} from 'express';

export class GetComputerInteractor implements UseCase<GetComputerDto, Computer> {
    constructor(private readonly computerRepository: ComputerRepository) {}
    
    execute(computer: GetComputerDto): Promise<Computer> {
        return this.computerRepository.findById(computer.id);
    }
}