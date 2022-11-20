import { Link } from 'react-router-dom';
import { Outlet } from '../../node_modules/react-router-dom/dist/index';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
