import { combineReducers } from "redux";
import reducer from "./reducer";
import categoriesReducer from "./categoriesReducer";
export const rootReducer = combineReducers({
  main: reducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
