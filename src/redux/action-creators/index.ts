import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const addCount = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: amount
        })
    }
}

export const subCount = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SUB,
            payload: amount
        })
    }
}

export const reset = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET
        })
    }
}