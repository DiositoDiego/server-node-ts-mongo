import { Entity } from "@/kernel/types"

export type Computer = Entity<string> & {
    id: string,
    numSerie: string,
    modelo: string,
    iduser: string,
}