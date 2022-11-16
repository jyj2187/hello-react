import React, { useState } from "react";
import Average from "./Hooks/Average";
import CounterHook from "./Hooks/CounterHook";
import Info from "./Hooks/Info";
import UseRefSample from "./Hooks/UseRefSample";

const Hooks = () => {
	const [visible, setVisible] = useState(false);
	const [name, setName] = useState("");
	const getName = (name) => {
		setName(name);
	};

	return (
		<div>
			<div>
				<CounterHook />
			</div>
			<div>
				<button
					onClick={() => {
						setVisible(!visible);
					}}>
					{visible ? "숨기기" : "보이기"}
				</button>
				<hr />
				{visible && <Info getName={getName} savedName={name} />}
			</div>
			<div>
				<Average />
			</div>
		</div>
	);
};

export default Hooks;
