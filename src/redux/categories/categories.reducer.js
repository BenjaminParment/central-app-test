import { ADD, REMOVE } from "./categories.types";

const INITIAL_STATE = [
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
];

const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return [...state.filter((x) => x.id !== action.payload.id)];
        default:
            return state;
    }
};

export default categoryReducer;
