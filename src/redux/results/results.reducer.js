import { SET } from "./results.types";

const INITIAL_STATE = [];

const resultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET:
            return [action.payload];
        default:
            return state;
    }
};

export default resultsReducer;
