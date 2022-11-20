import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈페이지는 가장 먼저 보여지는 페이지</p>
      <div>
        <ul>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/app">리액트 메인</Link>
          </li>
          <li>
            <Link to="/tutorial">1장부터 7장까지</Link>
          </li>
          <li>
            <Link to="/hooks">8장 Hooks 실습</Link>
          </li>
          <li>
            <Link to="/styling">9장 스타일링</Link>
          </li>
          <li>
            <Link to="/todo">10장 일정 관리 애플리케이션</Link>
          </li>
          {/* <li>
            <Link to="/profile/llems">정윤조 프로필</Link>
          </li>
          <li>
            <Link to="/profile/liean">강도경 프로필</Link>
          </li> */}
          <li>
            <Link to="/profiles">프로필 목록</Link>
            <ul>
              <li>
                <Link to="/profiles/llems">정윤조의 프로필</Link>
              </li>
              <li>
                <Link to="/profiles/liean">강도경의 프로필</Link>
              </li>
              <li>
                <Link to="/profiles/kihong">김기홍의 프로필</Link>
              </li>
              <li>
                <Link to="/profiles/void">존재하지 않는 프로필</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/articles">게시글 목록</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
