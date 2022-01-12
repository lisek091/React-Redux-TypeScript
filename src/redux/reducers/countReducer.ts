import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = 1000;

const reducer = (state: number = initialState, action: Action): number => {
    switch (action.type){
        case ActionType.ADD:
            return state + action.payload;
        case ActionType.SUB:
            return state - action.payload;
        case ActionType.RESET:
            return 0;
        default:
            return state
    }
}

export default reducer