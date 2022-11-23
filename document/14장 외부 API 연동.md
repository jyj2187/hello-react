## 비동기 작업의 이해

- 서버의 API를 호출하여 데이터를 수신하는 과정에서 시간이 걸리기 때문에 작업이 즉시 처리되는 것이 아니라, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리한다.
- 이 과정에서 해당 작업을 비동기적으로 처리하게 된다.
- 만약, 작업을 동기적으로 처리한다면 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없다.
- 비동기적으로 처리한다면 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러가지 요청을 처리할 수도 있고, 다른 함수를 호출할 수도 있다.

## 자바스크립트에서 비동기 처리

- **setTimeout 함수**를 사용하여 특정 작업을 예약할 떄도 비동기적으로 처리하게 된다.

  - `setTimeout(콜백 함수, 시간(ms));`

  ```javascript
  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;
      if (callback) {
        callback(result);
      }
    }, 1000);
  }

  increase(0, (result) => {
    console.log(result);
  }); // 10

  console.log('작업시작');
  increase(0, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        increase(result, (result) => {
          console.log(result);
          console.log('작업 완료');
        });
      });
    });
  });
  ```

  - 첫번째 파라미터에는 콜백 함수가 들어간다.
    > 콜백 지옥에 빠지지 않도록 주의한다. (콜백 함수 안에 또 콜백 함수가 들어가는 형태)

- **Promise** : 콜백 지옥같은 코드가 형성되지 않게 ES6에 도입된 기능.

  ```javascript
  function increase(number) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = number + 10;
        if (result > 50) {
          const e = new Error('NumberTooBig');
          return reject(e);
        }
        resolve(result);
      }, 1000);
    });
    return promise;
  }
  increase(0)
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .then((number) => {
      console.log(number);
      return increase(number);
    })
    .catch((e) => {
      console.log(e);
    });
  ```

  - 콜백 함수를 여러번 감싸는 것이 아니라, `.then`을 사용하여 그 다음 작업을 설정할 수 있다.

- **async/await** : Promise를 더욱 쉽게 사용할 수 있도록 해주는 ES2017(ES8) 문법.
  - 함수의 앞 부분에 async 키워드를 추가하고, 해당 함수 내부에서 Promise의 앞부분에 await 키워드를 사용한다.
  - Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있다.

## axios로 API 호출해서 데이터 받아오기

- axios는 현재 가장 많이 사용되고 있는 자바스크립트 HTTP 클라이언트.
- HTTP 요청을 Promise 기반으로 처리한다.
  ```javascript
  const onClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/2')
      .then((response) => {
        setData(response.data);
      });
  };
  ```
- axios를 사용하는 화살표 함수에 async를 붙이고, axios에 await를 붙여서 적용시킬 수도 있다.
  ```javascript
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  ```

## 실제 데이터 불러오기

- 데이터를 표현할 상위 컴포넌트(NewsList)
- 하나의 데이터를 담을 컴포넌트(NewsItem)
- 상위 컴포넌트에서 GET 요청을 보내 데이터를 전부 가져온 뒤 개별 데이터를 개별 컴포넌트에 props로 넘겨준다.
  - 배열의 map함수 사용

## 카테고리 기능 구현

- 카테고리 컴포넌트 생성
- 최상위 컴포넌트에서 선택된 카테고리 값을 카테고리와 NewsList 컴포넌트에 props로 전달
- Categories 컴포넌트에서는 선택된 카테고리에 대한 스타일 및 액티브 적용
- NewsList는 해당 카테고리에 대한 API 요청 전달 및 응답 데이터 처리

## 리액트 라우터 적용

- 기존에 카테고리 값을 useState로 관리하던 것을 URL 파라미터로 바꾸기.
- NavLink와 Route 활용

## 주의할 점

- useEffect에는 async가 적용된 함수를 쓰면 안된다.
- async를 써야하는 경우, useEffect 함수 안에 async를 적용한 함수를 따로 만들어주어야 한다.
