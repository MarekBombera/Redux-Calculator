import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { equal } from "../actions";

const EqualButton = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const dispatchEqual = bindActionCreators(equal, dispatch);

	const handleEqual = () => {
		const previous = parseFloat(state.previousOperand);
		let current;
		let computation = "";

		Array.isArray(state.currentOperand)
			? (current = parseFloat(state.currentOperand.join("")))
			: (current = parseFloat(state.currentOperand));

		if (isNaN(current) || isNaN(previous)) {
			return "";
		}

		switch (state.operator) {
			case "+":
				computation = previous + current;
				break;
			case "-":
				computation = previous - current;
				break;
			case "*":
				computation = previous * current;
				break;
			case "÷":
				computation = previous / current;
				break;
			case "%":
				computation = previous / 100;
				break;
		}

		dispatchEqual(computation.toString());
	};

	return (
		<button className="span-two" onClick={() => handleEqual()}>
			=
		</button>
	);
};

export default EqualButton;
