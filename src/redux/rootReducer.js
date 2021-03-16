import { combineReducers } from "redux";
import categoryReducer from "./categories/categories.reducer";
import displayResultsReducer from "./display-results/display-results-reducer";
import resultsReducer from "./results/results.reducer";

const rootReducer = combineReducers({
    searchResults: resultsReducer,
    categories: categoryReducer,
    displayResults: displayResultsReducer,
});

export default rootReducer;
