import React, { useRef } from "react";

const UseRefSample = () => {
	const sampleid = useRef(1);
	const setId = (n) => {
		sampleid.current = n;
	};

	const printId = () => {
		console.log(sampleid.current);
	};

	return <div>refSample</div>;
};

export default UseRefSample;
