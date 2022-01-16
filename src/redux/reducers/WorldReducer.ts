import { WorldDispatchTypes,WORLD_FAIL,WORLD_LOADING,WORLD_SUCCES,WorldType } from "../actions/WorldTypes";

interface DefaultState {
    loading: boolean,
    world?:WorldType
}

const defaultState:DefaultState = {
    loading:false
}

export const worldReducer = (state:DefaultState = defaultState,action:WorldDispatchTypes):DefaultState =>{
    switch(action.type){
        case WORLD_FAIL:
            return {
                loading:false
            }
        case WORLD_LOADING:
            return {
                loading:true
            }
        case WORLD_SUCCES:
            return{
                loading:false,
                world:action.payload
            }
        default: return state
    }
}