import { combineReducers } from "redux";
import { favouritReducer } from "./favourite";
import { paginationReducer } from "./pagination"

export default combineReducers({
    favourite: favouritReducer,
    pagination : paginationReducer,
});