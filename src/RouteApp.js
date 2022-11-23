import React from 'react';
import { Link, Route, useLocation } from 'react-router-dom';
import Home from './Routing/Home.js';
import About from './Routing/About.js';
import { Routes, useRoutes } from '../node_modules/react-router-dom/dist/index';
import App from './App.js';
import TodoApp from './TodoApp.js';
import Hooks from './Hooks.js';
import Styling from './Styling.js';
import Tutorials from './Tutorials.js';
import Profile from './Routing/Profile.js';
import Profiles from './Routing/Profiles.js';
import Articles from './Routing/Articles.js';
import Article from './Routing/Article.js';
import Layout from './Routing/Layout.js';
import NotFound from './Routing/NotFound.js';
import Login from './Routing/Login.js';
import MyPage from './Routing/MyPage.js';
import AxiosApp from './AxiosApp.js';
import NewsApp from './NewsApp.js';
import NewsPage from './AxiosComponents/NewsPage.js';
import NewsList from './AxiosComponents/NewsList.js';

const RouteApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<About />} />
          {/* <Route path="/profile/:username" element={<Profile />} /> */}
          <Route path="/app" element={<App />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/styling" element={<Styling />} />
          <Route path="/tutorial" element={<Tutorials />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/axios" element={<AxiosApp />} />
          <Route path="/news" element={<NewsApp />}>
            <Route path=":category" element={<NewsList />} />
          </Route>
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path={'/login'} element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteApp;
