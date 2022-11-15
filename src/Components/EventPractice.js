import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  // State handleChange(Message message);
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // void handleClick();
  printMessage = () => {
    alert(this.state.username + " : " + this.state.message);
  };

  // handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     this.printMessage();
  //   }
  // };

  initialize = () => {
    this.setState({
      username: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="이름을 입력하세요."
          value={this.state.username}
          onChange={this.saveValue}
        />
        <input
          type="text"
          name="message"
          placeholder="출력하고 싶은 메시지"
          value={this.state.message}
          //   onChange={(e) => {
          //     this.setState({
          //       message: e.target.value,
          //     });
          //   }}
          onChange={this.saveValue}
          // onKeyUp={this.handleKeyPress}
        />
        <button
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: "",
          //     });
          //   }}
          onClick={this.printMessage}
        >
          확인
        </button>
        <button
          //   onClick={() => {
          //     alert(this.state.message);
          //     this.setState({
          //       message: "",
          //     });
          //   }}
          onClick={this.initialize}
        >
          초기화
        </button>
      </div>
    );
  }
}
export default EventPractice;
