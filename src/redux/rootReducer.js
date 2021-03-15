import { combineReducers } from "redux";
import categoryReducer from "./categories/categories.reducer";
import resultsReducer from "./results/results.reducer";

const rootReducer = combineReducers({
    searchResults: resultsReducer,
    categories: categoryReducer,
});

export default rootReducer;
