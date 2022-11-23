import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //뒤로가기
  };

  const goArticles = () => {
    navigate('/articles', { replace: true });
  };

  const location = useLocation();
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        {/* Header */}
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
        {location.pathname === '/' ? (
          ''
        ) : (
          <div>
            <Link to="/">홈</Link>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
