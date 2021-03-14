import { ADD, REMOVE } from "./categories.types";

const INITIAL_STATE = {
    categories: [
        {
            name: "Benjamin Parment",
            path: "Benjamin>Parment>Nicolas",
            id: 1,
        },
        {
            name: "Stephen Charlton",
            path: "Stephen>Charlton>Leeds",
            id: 2,
        },
    ],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case REMOVE:
            return {
                ...state,
                categories: [...state.categories.filter((x) => x.id === action.payload.id)],
            };
        default:
            return state;
    }
};

export default categoryReducer;
