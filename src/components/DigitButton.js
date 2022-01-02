import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addDigit } from "../actions";

const DigitButton = ({ digit }) => {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const dispatchAddDigit = bindActionCreators(addDigit, dispatch);

	const handleAddDigit = () => {
		if (state.currentOperand.includes(".") && digit === ".") {
			return;
		}

		dispatchAddDigit(digit);
	};

	return <button onClick={() => handleAddDigit()}>{digit}</button>;
};

export default DigitButton;
