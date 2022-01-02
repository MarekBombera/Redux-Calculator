import { combineReducers } from "redux";
import currentOperand from "./currentOperandReducer";
import previousOperand from "./previousOperandReducer";
import operator from "./operatorReducer";

export default combineReducers({
	currentOperand,
	previousOperand,
	operator,
});
