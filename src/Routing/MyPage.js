import { Navigate } from '../../node_modules/react-router-dom/dist/index';

const MyPage = () => {
  const isLoggedIn = false;

  //   if (!isLoggedIn) {
  //     return <Navigate to="/login" replace={true} />;
  //   }

  //   return <div>마이 페이지</div>;

  return (
    <div>
      {isLoggedIn ? (
        <div>마이 페이지</div>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </div>
  );
};

export default MyPage;
