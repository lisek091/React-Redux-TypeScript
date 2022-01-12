import { ActionType } from "../action-types/index"

interface AddAction {
    type: ActionType.ADD,
    payload: number
}

interface SubAction {
    type: ActionType.SUB,
    payload: number
}

interface ResetAction {
    type: ActionType.RESET
}

export type Action = AddAction | SubAction | ResetAction;