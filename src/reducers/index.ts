import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
	weatherReducer,
	alertReducer,
});
