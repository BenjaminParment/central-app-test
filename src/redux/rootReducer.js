import { combineReducers } from "redux";
import categoryReducer from "./categories/categories.reducer";
import displayResultsReducer from "./display-results/display-results-reducer";
import loadingResultsReducer from "./loading/loading-reducer";
import resultsReducer from "./results/results.reducer";

const rootReducer = combineReducers({
    searchResults: resultsReducer,
    categories: categoryReducer,
    displayResults: displayResultsReducer,
    loadingResults: loadingResultsReducer,
});

export default rootReducer;
