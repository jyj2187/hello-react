import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Tutorials from './Tutorials';
import Hooks from './Hooks';
import reportWebVitals from './reportWebVitals';
import Styling from './Styling';
import TodoApp from './TodoApp';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import RouteApp from './RouteApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  /* //   <App />
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
  //   <TodoApp />
  /**
   * 13장 리액트 라우터로 SPA 개발하기
   */
  <BrowserRouter>
    <RouteApp />
  </BrowserRouter>,
  // </React.StrictMode>,
);
reportWebVitals();
