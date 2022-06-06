import { combineReducers } from "redux";

import studentsReducer from "./ducks/students/reducers";

const rootReducer = combineReducers({
  students: studentsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
