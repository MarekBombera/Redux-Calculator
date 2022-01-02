const previousOperand = (previousOperand = null, action) => {
	switch (action.type) {
		case "ADD_PREVIOUS_OPERAND":
			return action.payload;

		case "CLEAR_ALL":
			return action.payload;

		default:
			return previousOperand;
	}
};

export default previousOperand;
