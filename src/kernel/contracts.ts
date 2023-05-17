import { Request, Response } from "express";

export interface UseCase<TInput,TOutput>{
    execute(payload?: TInput): Promise<TOutput>
}