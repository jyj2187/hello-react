import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: '제목',
//   description: '내용',
//   url: 'url',
//   urlToImage: 'https://via.placeholder.com/160',
// };

const NewsList = ({ category }) => {
  //   const [articles, setArticles] = useState(null);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const query = category === 'all' ? '' : `&category=${category}`;
  //         const response = await axios.get(
  //           `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2d9a8d40ea574369aa15f4dd3e669cf3`,
  //         );
  //         setArticles(response.data.articles);
  //       } catch (e) {
  //         console.log('서버와 통신이 원활하지 않습니다.');
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, [category]);

  // 커스텀 Hook 사용
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2d9a8d40ea574369aa15f4dd3e669cf3`,
    );
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>불러오는 중...</NewsListBlock>;
  }
  //   // 아직 articles 값이 설정되지 않았을 때
  //   if (!articles) {
  //     return null;
  //   }

  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
