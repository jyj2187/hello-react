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

const RouteApp = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === '/' ? (
        ''
      ) : (
        <div>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
          </ul>
        </div>
      )}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/app" element={<App />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/styling" element={<Styling />} />
        <Route path="/tutorial" element={<Tutorials />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouteApp;
