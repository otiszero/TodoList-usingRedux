import { combineReducers } from "redux";
import arrReducer from "./arrReducer";
import isAddingReducer from "./isAddingReducer";

const reducer = combineReducers({
  arr: arrReducer,
  isAdding: isAddingReducer
});

export default reducer;
