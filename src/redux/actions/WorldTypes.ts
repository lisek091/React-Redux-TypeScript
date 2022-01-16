export const WORLD_LOADING = "WORLD_LOADING"
export const WORLD_SUCCES = "WORLD_SUCCES"
export const WORLD_FAIL = "WORLD_FAIL"

export type WorldType = {
    name:string,
    climate:string,
    terraing:string,
    population:string,
}

export interface WorldLoading {
    type:typeof WORLD_LOADING
}
export interface WorldFail {
    type:typeof WORLD_FAIL
}
export interface WorldSucces {
    type:typeof WORLD_SUCCES,
    payload:WorldType
}

export type WorldDispatchTypes = WorldLoading | WorldFail | WorldSucces