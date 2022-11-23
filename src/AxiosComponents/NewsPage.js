import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsPage = () => {
  const category = useParams() || 'all';
  console.log(category);
  return (
    <>
      <Categories
      //   category={category} onSelect={onSelect}
      />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
