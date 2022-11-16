import React, { Component } from "react";

class CounterClass extends Component {
  // state의 초기값 설정
  state = {
    //state는 객체형식이어야 한다.
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // 이벤트 설정은 무적권 화살표 함수
          onClick={() => {
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default CounterClass;
