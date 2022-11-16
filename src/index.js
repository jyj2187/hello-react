import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Tutorials from './Tutorials';
import Hooks from './Hooks';
import reportWebVitals from './reportWebVitals';
import Styling from './Styling';
import TodoApp from './TodoApp';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  /**
   * 1장 ~ 7장 실습
   */
  // <Tutorials />
  /**
   * 8장 Hook 실습
   */
  // <Hooks />
  /**
   * 9장 Styling 실습
   */
  // <Styling />
  /**
   * 10 장 일정관리 애플리케이션 만들기
   */
  <TodoApp />,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
