const operator = (operator = null, action) => {
	switch (action.type) {
		case "ADD_OPERATOR":
			return action.payload;

		case "CLEAR_ALL":
			return action.payload;

		default:
			return operator;
	}
};

export default operator;
