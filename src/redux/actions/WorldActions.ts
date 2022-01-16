import { Dispatch } from "redux";
import axios from "axios";
import { WORLD_FAIL,WORLD_LOADING,WORLD_SUCCES,WorldDispatchTypes } from "./WorldTypes";

export const GetWorld = (world:string) => async (dispatch:Dispatch<WorldDispatchTypes>) =>{
    try {
        dispatch({
            type:WORLD_LOADING
        })
        const res = await axios.get(`${world}`)
        dispatch({
            type:WORLD_SUCCES,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:WORLD_FAIL
        })
    }
}