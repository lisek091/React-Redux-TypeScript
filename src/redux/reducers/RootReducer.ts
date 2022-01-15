import {combineReducers} from "redux";
import { heroReducer } from "./HeroReducer";
const RootReducer = combineReducers({
    hero:heroReducer
});

export default RootReducer