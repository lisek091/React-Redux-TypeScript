export const HERO_LOADING = "HERO_LOADING";
export const HERO_FAIL = "HERO_FAIL";
export const HERO_SUCCESS = "HERO_SUCCESS";


export type HeroType ={
        height:number,
        mass:string,
        hair_color:string,
        skin_color:string,
        eye_color:string,
        name:string,
        homeworld:string,
        birth_year:string,
        gender:string,
}
export interface HeroSucces  {
    type:typeof HERO_SUCCESS, 
    payload : HeroType,
}
export interface HeroFail  {
    type:typeof HERO_FAIL, 
}
export interface HeroLoading  {
    type:typeof HERO_LOADING, 
}
export type HeroDispatchTypes = HeroSucces | HeroLoading | HeroFail
