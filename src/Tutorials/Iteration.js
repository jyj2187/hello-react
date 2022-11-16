import React, { useState } from "react";

const Iteration = () => {
	const [names, setNames] = useState([
		{ id: 1, text: "사과" },
		{ id: 2, text: "바나나" },
		{ id: 3, text: "포도" },
		{ id: 4, text: "수박" },
		{ id: 5, text: "참외" },
	]);
	const [inputText, setInputText] = useState("");
	const [nextId, setNextId] = useState(6);

	const onChange = (e) => setInputText(e.target.value);
	const onClick = () => {
		// const nextName = { id: nextId, text: inputText };
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		});
		setNextId(nextId + 1);
		setNames(nextNames);
		setInputText("");
	};

	const onDoubleClick = (id) => {
		const filterNames = names.filter((name) => name.id !== id);
		setNames(filterNames);
	};

	const nameList = names.map((name) => (
		<li key={name.id} onDoubleClick={() => onDoubleClick(name.id)}>
			{name.text}
		</li>
	));
	return (
		<div>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick}>추가</button>
			<ul>{nameList}</ul>
		</div>
	);
};

export default Iteration;
