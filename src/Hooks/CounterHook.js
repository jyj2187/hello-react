import { useReducer, useState } from "react";

function reducer(state, action) {
	// action.type에 따라 다른 작업 수행
	switch (action.type) {
		case "INCREMENT":
			return { value: state.value + 1 };
		case "DECREMENT":
			return { value: state.value - 1 };
		default:
			// 아무것도 해당되지 않을 때 기존 상태 반환
			return state;
	}
}

const CounterHook = () => {
	const [value, setValue] = useState(0);
	const [state, dispatch] = useReducer(reducer, { value: 0 });
	return (
		<div>
			<p>
				useState : 현재 카운터 값은 <b>{value}</b>입니다. <br />
				useReducer : 현재 카운터 값은 <b>{state.value}</b>입니다.
			</p>
			<button onClick={() => setValue(value + 1)}>+1</button>
			<button onClick={() => setValue(value - 1)}>-1</button>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
		</div>
	);
};

export default CounterHook;
