import { combineReducers } from "redux";
import contentReducer from "./contentSlice";

export const rootReducer = combineReducers({
    contentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
