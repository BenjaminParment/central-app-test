import { SET_RESULTS } from "./results.types";

const INITIAL_STATE = { results: [] };

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};

export default resultsReducer;
