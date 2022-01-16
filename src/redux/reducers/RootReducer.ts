import {combineReducers} from "redux";
import { heroReducer } from "./HeroReducer";
import { worldReducer } from "./WorldReducer";
const RootReducer = combineReducers({
    hero:heroReducer,
    wrold:worldReducer
});

export default RootReducer