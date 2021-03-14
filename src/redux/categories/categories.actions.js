import { ADD, REMOVE } from "./categories.types";

export const addCategory = (payload) => ({ type: ADD, payload });

export const removeCategory = (payload) => ({ type: REMOVE, payload });
