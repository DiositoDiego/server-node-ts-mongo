import { ResponseApi } from "../../../../kernel/types";
import { GetComputerDto } from "../../adapters/dto/get-computer";
import { SaveComputerDto } from "../../adapters/dto/save-computer";
import { UpdateComputerDto } from "../../adapters/dto/update-computer";
import { Computer } from "../../entities/computer";
import {Response, Request} from 'express';

export interface ComputerRepository {
    findAll(): Promise<Computer[]>;
    findById(id: string): Promise<Computer>;
    save(computer: SaveComputerDto): Promise<Computer>;
    update(computer: UpdateComputerDto): Promise<Computer>;
    delete(id: string): Promise<Computer>;
}