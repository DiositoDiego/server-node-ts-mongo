import { Request, Response, Router } from "express"
import { ResponseApi } from "../../../kernel/types";
import { Computer } from "../entities/computer";
import { ComputerRepository } from "../use-cases/ports/computer.repository";
import { ComputerStorageGateway } from "./computer.storage.gateway";
import { GetComputersInteractor } from "../use-cases/get-computers.interactor";
import { GetComputerInteractor } from "../use-cases/get-computer.interactor";
import { SaveComputerInteractor } from "../use-cases/save-computer.interactor";
import { UpdateComputerInteractor } from "../use-cases/update-computer.interactor";
import { DeleteComputerInteractor } from "../use-cases/delete-computer.interactor";
import { GetComputerDto } from "./dto/get-computer";

const ComputerRouter = Router();

export class ComputerController {
    static getError(): ResponseApi<Computer> {
        return {
            code: 500,
            message: "Internal Server Error",
            entity: undefined,
            entities: undefined,
            error: true
        } as ResponseApi<Computer>;
    }

    static async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const repository: ComputerRepository = new ComputerStorageGateway();
            const interactor: GetComputersInteractor = new GetComputersInteractor(repository);

            const computers: Computer[] = await interactor.execute();
            const body: ResponseApi<Computer> = {
                code: 200,
                message: "OK",
                entity: undefined,
                entities: computers,
                error: false,
                count: computers.length
            } as ResponseApi<Computer>;
            return res.status(body.code).json(body.entities);
        } catch (error) {
            return res.status(this.getError().code).json(this.getError());
        }
    }

    static async getOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id.toString();
            const repository: ComputerRepository = new ComputerStorageGateway();
            const interactor: GetComputerInteractor = new GetComputerInteractor(repository);

            const computer: Computer = await interactor.execute({id} as GetComputerDto);
            const body: ResponseApi<Computer> = {
                code: 200,
                message: "OK",
                entity: computer,
                entities: undefined,
                error: false,
                count: 1
            } as ResponseApi<Computer>;
            return res.status(body.code).json(body.entity);
        } catch (error) {
            return res.status(this.getError().code).json(this.getError());
        }
    }

    static async save(req: Request, res: Response): Promise<Response> {
        try {
            const repository: ComputerRepository = new ComputerStorageGateway();
            const interactor: SaveComputerInteractor = new SaveComputerInteractor(repository);

            const computer: Computer = await interactor.execute(req.body);
            const body: ResponseApi<Computer> = {
                code: 200,
                message: "OK",
                entity: computer,
                entities: undefined,
                error: false,
                count: 1
            } as ResponseApi<Computer>
            return res.status(body.code).json(body.entity);
        } catch (error) {
            return res.status(this.getError().code).json(this.getError());
        }
    }

    static async update(req: Request, res: Response): Promise<Response>{
        try {
            const repository: ComputerRepository = new ComputerStorageGateway();
            const interactor: UpdateComputerInteractor = new UpdateComputerInteractor(repository);

            let computer: Computer = await interactor.execute(req.body);
            computer = {
                ...computer,
                id: req.params.id.toString()
            }
            const body: ResponseApi<Computer> = {
                code: 200,
                message: "OK",
                entity: computer,
                entities: undefined,
                error: false,
                count: 1
            } as ResponseApi<Computer>;
            return res.status(body.code).json(body.entity);
        } catch (error) {
            return res.status(this.getError().code).json(this.getError());
        }
    }

    static async delete(req: Request, res: Response): Promise<Response> {
        try {
            const repository: ComputerRepository = new ComputerStorageGateway();
            const interacttor: DeleteComputerInteractor = new DeleteComputerInteractor(repository);

            const computer: Computer = await interacttor.execute(req.params.id.toString());
            const body: ResponseApi<Computer> = {
                code: 200,
                message: "OK",
                entity: computer,
                entities: undefined,
                error: false,
                count: 1
            } as ResponseApi<Computer>;
            return res.status(body.code).json(body.entity);
        } catch (error) {
            return res.status(this.getError().code).json(this.getError());
        }
    }
}

ComputerRouter.get("/", ComputerController.getAll);
ComputerRouter.get("/:id", ComputerController.getOne);
ComputerRouter.post("/", ComputerController.save);
ComputerRouter.put("/:id", ComputerController.update);
ComputerRouter.delete("/:id", ComputerController.delete);

export default ComputerRouter;