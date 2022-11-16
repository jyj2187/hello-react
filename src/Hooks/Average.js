import React, { useCallback, useMemo, useRef, useState } from "react";
// input의 상태가 변할때마다 getAverage 함수를 호출하게 된다.
// => 최적화 필요!
const getAverage = (numbers) => {
	console.log("평균값 계산 중");
	if (numbers.length === 0) {
		return 0;
	}

	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState("");
	const inputEl = useRef(null);

	const onChange = useCallback((e) => {
		setNumber(e.target.value);
	}, []);

	const onInsert = useCallback(() => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber("");
		inputEl.current.focus();
	}, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

	const onInitial = useCallback(() => {
		setList([]);
	}, []);

	// useMemo로 연산 최적화
	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<div>
			<input value={number} onChange={onChange} ref={inputEl} />
			<button onClick={onInsert}>등록</button>
			<button onClick={onInitial}>초기화</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<div>
				<b>평균값: </b> {avg}
			</div>
		</div>
	);
};

export default Average;
