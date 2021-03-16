import { SET_DISPLAY } from "./display-results-types";

const INITIAL_STATE = { show: false };

const displayResultsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_DISPLAY:
            return {
                ...state,
                show: action.payload,
            };
        default:
            return state;
    }
};

export default displayResultsReducer;
