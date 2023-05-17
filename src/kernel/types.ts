export type Entity<TIdentifier extends number | string> = {
    id?: TIdentifier
}

export type ResponseApi<T> = {
    code: number,
    message?: string,
    entity?: T,
    entities?: T[],
    error?: boolean,
    count?: number,
}