import { ResponseApi } from "../../../kernel/types";
import { Computer } from "../entities/computer";
import { ComputerRepository } from "../use-cases/ports/computer.repository";
import { SaveComputerDto } from "./dto/save-computer";
import { UpdateComputerDto } from "./dto/update-computer";
import { ComputerModel } from "../../../utils/dbconfig";
import { v4 as uuidv4} from 'uuid';

export class ComputerStorageGateway implements ComputerRepository {
    async findAll(): Promise<Computer[]> {
        try {
            const computers: Computer[] = await ComputerModel.find()
            .then((computers: any[]) => {
                computers.map((computer: any, index: number) => {
                    computer[index] = {
                         id: computer._id, 
                         numSerie: computer.numSerie, 
                         modelo: computer.modelo, 
                         iduser: computer.iduser 
                    } as Computer;
                })
                return computers;
            }).catch(() => {
                throw new Error("Error al obtener las computadoras")
            });
            
            return computers;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener las computadoras");
        }
    }
    async findById(id: string): Promise<Computer> {
        try {
            const computer: Computer = await ComputerModel.findOne({
                _id: id
            }).then((computer: any) => {
                return {
                    id: computer._id,
                    numSerie: computer.numSerie,
                    modelo: computer.modelo,
                    iduser: computer.iduser
                } as Computer;
            }).catch(() => {
                throw new Error("Error al obtener las computadoras")
            });
            return computer;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener la computadora");
        }

    }
    async save(computer: SaveComputerDto): Promise<Computer> {
        try {
            const response = await ComputerModel.create({
                _id: uuidv4(),
                ...computer
            });
            const computer1 = { id: response._id, numSerie: response.numSerie, modelo: response.modelo, iduser: response.iduser } as Computer;
            return computer1;
        } catch (error) {
            console.log(error);
            throw new Error("Error al guardar la computadora");
        }

    }
    async update(computer: UpdateComputerDto): Promise<Computer> {
        try {
            const response = await ComputerModel.findByIdAndUpdate(computer.id, computer)
            .then((computer: any) => computer as Computer);
            const computer1 = { id: response.id, numSerie: response.numSerie, modelo: response.modelo, iduser: response.iduser } as Computer;
            return computer1;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar la computadora");
        }
    }
    async delete(id: string): Promise<Computer> {
        try {
            const response = await ComputerModel.findByIdAndDelete(id)
            .then((computer: any) => computer as Computer);
            const computer: Computer = { id: response.id, numSerie: response.numSerie, modelo: response.modelo, iduser: response.iduser } as Computer;
            return computer;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar la computadora");
        }
    }
}