import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { clearAll } from "../actions";

import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import EqualButton from "./EqualButton";

import "../styles/css/style.css";

const App = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const dispatchClearAll = bindActionCreators(clearAll, dispatch);

	return (
		<div className="calculator-grid">
			<div className="output">
				<div className="previous-operand">
					{state.previousOperand}
					{state.operator}
				</div>
				<div className="current-operand">
					{state.currentOperand.length === 0 ? 0 : state.currentOperand}
				</div>
			</div>
			<button className="span-two" onClick={() => dispatchClearAll()}>
				AC
			</button>
			<OperationButton operation="%" />
			<OperationButton operation="÷" />
			<DigitButton digit="7" />
			<DigitButton digit="8" />
			<DigitButton digit="9" />
			<OperationButton operation="*" />
			<DigitButton digit="4" />
			<DigitButton digit="5" />
			<DigitButton digit="6" />
			<OperationButton operation="-" />
			<DigitButton digit="1" />
			<DigitButton digit="2" />
			<DigitButton digit="3" />
			<OperationButton operation="+" />
			<DigitButton digit="." />
			<DigitButton digit="0" />
			<EqualButton />
		</div>
	);
};

export default App;
