import { useCallback, useState } from 'react';
import {
  Route,
  Routes,
  useParams,
} from '../node_modules/react-router-dom/dist/index';
import Categories from './AxiosComponents/Categories';
import NewsList from './AxiosComponents/NewsList';
import NewsPage from './AxiosComponents/NewsPage';

const NewsApp = () => {
  //   const [category, setCategory] = useState('all');
  //   const onSelect = useCallback((category) => setCategory(category), []);
  const { category } = useParams();

  return (
    <>
      <Categories />
      <NewsList category={category || 'all'} />
    </>
  );
};

export default NewsApp;
