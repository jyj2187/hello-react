import React, { Component } from "react";
import "../css/ValidationSample.css";

class Validation extends Component {
	state = {
		password: "",
		clicked: false,
		validated: false,
	};

	handleChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === "0000",
		});
		// onClick 이벤트가 발생하면 input에 포커스가 생긴다
		this.input.focus();
	};

	render() {
		return (
			<div>
				<input
					ref={(ref) => (this.input = ref)}
					type="password"
					value={this.state.password}
					onChange={this.handleChange}
					className={
						this.state.clicked
							? this.state.validated
								? "success"
								: "failure"
							: ""
					}
				/>
				<button onClick={this.handleButtonClick}>검증하기</button>
			</div>
		);
	}
}

export default Validation;
