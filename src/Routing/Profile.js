import { Link, Route, useParams } from 'react-router-dom';

const data = {
  llems: {
    name: '정윤조',
    description: '바보 아님 근데 바보임.',
  },
  liean: {
    name: '강도경',
    description: '절친으로 이동관을 소유하고 있음.',
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>
            {username}({profile.name})
          </h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
