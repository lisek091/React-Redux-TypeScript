import { Dispatch } from "redux";
import { HERO_FAIL,HERO_LOADING,HERO_SUCCESS,HeroDispatchTypes } from "./HeroTypes";
import axios from 'axios'

export const GetHero = (hero:number) => async (dispatch:Dispatch<HeroDispatchTypes>) =>{
    try {
        dispatch({
            type: HERO_LOADING
        })
        const res = await axios.get(`https://swapi.py4e.com/api/people/${hero}/`)
        dispatch({
            type: HERO_SUCCESS,
            payload:res.data
        })
    }
    catch(error){
        dispatch({
            type:HERO_FAIL
        })
    }
}