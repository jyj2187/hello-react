import React, { useEffect, useReducer, useState } from "react";

// useReducer 추가
function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	};
}

function Info({ getName, savedName }) {
	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");
	const [state, dispatch] = useReducer(reducer, {
		reducerName: "",
		reducerNick: "",
	});

	const { reducerName, reducerNick } = state;
	const onChange = (e) => {
		dispatch(e.target);
	};

	// 리렌더링 될 때마다
	// useEffect(() => {
	// 	console.log("렌더링이 완료되었습니다.");
	// });

	// 마운트될 때만 실행
	useEffect(() => {
		console.log("마운트될 때만 실행됩니다.");
		setName(savedName);
	}, []);
	// TODO: 이 부분 해결해보자

	// 특정 값(name)이 업데이트 될때만
	// useEffect(() => {
	// 	console.log("name이 업데이트 될때만 실행");
	// }, [name]);

	// 뒷정리하기(cleanup)
	// useEffect(() => {
	// 	console.log("effect");
	// 	console.log(name);
	// 	return () => {
	// 		console.log("cleanup");
	// 		console.log(name);
	// 	};
	// }, [name]);

	const onChangeName = (e) => {
		setName(e.target.value);
	};

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};

	getName(name);

	return (
		<div>
			<div>
				<div>
					<h2>useEffect</h2>
				</div>
				<input value={name} onChange={onChangeName} placeholder="이름" />
				<input
					value={nickname}
					onChange={onChangeNickname}
					placeholder="닉네임"
				/>
			</div>
			<div>
				<div>
					<b>이름: </b> {name}
				</div>
			</div>
			<div>
				<div>
					<b>닉네임: </b> {nickname}
				</div>
			</div>
			<div>
				<div>
					<h2>useReducer</h2>
				</div>
				<input
					name="reducerName"
					value={reducerName}
					onChange={onChange}
					placeholder="이름"
				/>
				<input
					name="reducerNick"
					value={reducerNick}
					onChange={onChange}
					placeholder="닉네임"
				/>
			</div>
			<div>
				<div>
					<b>이름: </b> {reducerName}
				</div>
			</div>
			<div>
				<div>
					<b>닉네임: </b> {reducerNick}
				</div>
			</div>
		</div>
	);
}

export default Info;
