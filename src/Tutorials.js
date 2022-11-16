import logo from './resources/logo.svg';
import './css/App.css';
import { Component } from 'react';
import MyComponet from './Tutorials/MyComponet';
import CounterClass from './Tutorials/CounterClass';
import Say from './Tutorials/Say';
import EventPractice from './Tutorials/EventPractice';
import EventFunctional from './Tutorials/EventFunctional';
import Validation from './Tutorials/Validation';
import ScrollBox from './Tutorials/ScrollBox';
import Iteration from './Tutorials/Iteration';
import LifeCycle from './Tutorials/LifeCycle';

// const name = "React";
const name = undefined;
const number = 0;
const style = {
  backgroundColor: 'black',
  color: 'aqua',
  fonsSize: '48px',
  fontWeight: 'bold',
  padding: 16,
};

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class Tutorials extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div style={style}>
        <div>
          <img src={logo} height="300" className="App-logo" alt="logo"></img>
          <h1>{name} 안녕!</h1>
        </div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scorllToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
        <Validation />
        <EventPractice />
        <EventFunctional />
        <MyComponet name="React" favoriteNum={7}>
          리액트
        </MyComponet>
        <Say />
        <CounterClass />
        <div className="react">
          <h2>삼항연산자</h2>
          {name === 'React' ? (
            <h1>리액트입니다.</h1>
          ) : (
            <h1>리액트가 아닙니다.</h1>
          )}
          <h2>AND 연산자</h2>
          {name === 'React' && <h1>리액트입니다.</h1>}
          {number && <div>내용</div>}
          <div>{name || '리액트'}</div>
        </div>
        <h1>동적 배열 리렌더링</h1>
        <Iteration />
        <h1>LifeCycle</h1>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycle color={this.state.color} />
      </div>
    );
  }
}

export default Tutorials;
