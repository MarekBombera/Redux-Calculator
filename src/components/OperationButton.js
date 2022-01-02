import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
	addOperator,
	addPreviousOperand,
	clearCurrentOperand,
} from "../actions";

const OperationButton = ({ operation }) => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const dispatchAddOperator = bindActionCreators(addOperator, dispatch);
	const dispatchAddPreviousOperand = bindActionCreators(
		addPreviousOperand,
		dispatch
	);
	const dispatchClearCurrentOperand = bindActionCreators(
		clearCurrentOperand,
		dispatch
	);

	const handleOperatorClick = () => {
		if (state.currentOperand.length === 0) {
			return;
		}

		Array.isArray(state.currentOperand)
			? dispatchAddPreviousOperand(state.currentOperand.join(""))
			: dispatchAddPreviousOperand(state.currentOperand);

		dispatchAddOperator(operation);
		dispatchClearCurrentOperand();
	};

	return <button onClick={() => handleOperatorClick()}>{operation}</button>;
};

export default OperationButton;
