import { combineReducers } from 'redux';

import inputReducer from './input/input.reducer';

const rootReducer = combineReducers({
    input: inputReducer,
});

export default rootReducer;