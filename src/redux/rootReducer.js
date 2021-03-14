import { combineReducers } from "redux";
import categoryReducer from "./categories/categories.reducer";
import inputReducer from "./input/input.reducer";

const rootReducer = combineReducers({
    input: inputReducer,
    categories: categoryReducer,
});

export default rootReducer;
