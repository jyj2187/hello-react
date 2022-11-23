import { useState } from 'react';
import axios from '../node_modules/axios/index';

const AxiosApp = () => {
  const [data, setData] = useState(null);
  //     const onClick = () => {
  //       axios
  //         .get('https://jsonplaceholder.typicode.com/todos/2')
  //         .then((response) => {
  //           setData(response.data);
  //         });
  //     };
  //   const onClick = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://jsonplaceholder.typicode.com/todos/1',
  //       );
  //       setData(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  const onClick = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=2d9a8d40ea574369aa15f4dd3e669cf3',
      )
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          cols={50}
          rows={100}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default AxiosApp;
