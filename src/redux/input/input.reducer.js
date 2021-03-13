import { SET } from './input.types';

const INITIAL_STATE = {
    content: '',
}

const inputReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                content: action.payload,
            };
        default:
            return state;
    }
}


export default inputReducer;