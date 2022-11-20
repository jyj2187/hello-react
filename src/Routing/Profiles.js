import Profile from './Profile';
import { Link, Routes, Route } from 'react-router-dom';

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/llems">정윤조</Link>
        </li>
        <li>
          <Link to="/profiles/liean">강도경</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path={'/profiles'}
          element={<div>사용자를 선택해 주세요.</div>}
        />
        <Route path={'/profiles/:username'} element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
