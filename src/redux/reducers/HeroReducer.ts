import { HERO_FAIL,HERO_LOADING,HERO_SUCCESS,HeroDispatchTypes,HeroType } from "../actions/HeroTypes";

interface DefaultState {
    loading: boolean,
    hero?:HeroType
}

const defaultState:DefaultState={
    loading:false
}

export const heroReducer = (state:DefaultState = defaultState,action :HeroDispatchTypes):DefaultState =>{
    switch(action.type){
        case HERO_FAIL:
            return{
                loading:false,
            }
        case HERO_LOADING:
            return {
                loading:true,
            }
        case HERO_SUCCESS:
            return {
                loading:false,
                hero:action.payload
            }
        default:
            return state
    }
}