import { combineReducers } from "redux";
import entityReducer from "./entityReducer";
import coreReducer from "./coreReducer";

const reducers = combineReducers({
  allEntity: entityReducer,
  coreEntites: coreReducer,
});

export default reducers;
