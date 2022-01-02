export const addDigit = (addDigit) => {
	return {
		type: "ADD_DIGIT",
		payload: addDigit,
	};
};

export const addOperator = (operator) => {
	return {
		type: "ADD_OPERATOR",
		payload: operator,
	};
};

export const equal = (equal) => {
	return {
		type: "EQUAL",
		payload: equal,
	};
};

export const addPreviousOperand = (operand) => {
	return {
		type: "ADD_PREVIOUS_OPERAND",
		payload: operand,
	};
};

export const clearAll = () => {
	return {
		type: "CLEAR_ALL",
		payload: "",
	};
};

export const clearCurrentOperand = () => {
	return {
		type: "CLEAR_CURRENT_OPERAND",
		payload: "",
	};
};
