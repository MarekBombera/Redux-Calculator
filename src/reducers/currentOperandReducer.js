const currentOperand = (currentOperand = [], action) => {
	switch (action.type) {
		case "ADD_DIGIT":
			return [...currentOperand, action.payload];

		case "EQUAL":
			return action.payload;

		case "CLEAR_ALL":
			return action.payload;

		case "CLEAR_CURRENT_OPERAND":
			return action.payload;

		default:
			return currentOperand;
	}
};

export default currentOperand;
