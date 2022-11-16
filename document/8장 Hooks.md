## Hooks

- 함수형 컴포넌트에서

## useState

```javascript
const [value, setValue] = useState(""); // <- 이 부분에 타입의 초기값이 들어간다.
```

## useEffect

- 리액트 컴포넌트라 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태와 비슷하다.
- **마운트될 때만 실행하고 싶을 때**
  - useEffect({마운트 될 때 실행될 함수}, []);
  - 함수의 두번째 파라미터로 빈 배열을 넣어주면 된다.
- **특정 값이 업데이트될 때만 실행하고 싶을 때**
  - useEffect({실행 함수}, [검사하고 싶은 값]);
  - 함수의 두번째 파라미터 배열 안에 검사하고 싶은 값을 넣어주면 된다.
  - useState를 통해 관리하고 있는 상태를 넣어주어도 되고
  - props로 전달받은 값을 넣어주어도 된다.
- **뒷정리 하기**
  - 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리 함수를 반환해 준다.
  ```javascript
    useEffect(() => {
        함수
        return () => {뒷정리 함수};
    }, [검사하고 싶은 값]);
  ```
  - 렌더링될 때마다 뒷정리 함수가 나타나고, 업데이트 되기 직전의 값을 보여준다.
  - 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 두번째 파라미터에 빈 배열을 넣으면 된다.

## useReducer

- useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook.
- 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수
- 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야 한다.

```javascript
function reducer(state, action) {
  return { ... }; // 불변성을 지키면서 업데이트한 새로운 상태 반환
};
```

- 액션 값은 주로 다음과 같은 형태
  {
  type: 'INCREMENT',
  ...
  }
- useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요는 없다.
- 하지만 추후 다룰 리덕스에서는 반드시 type 필드를 지정해주어야 한다.

- useReduer의 첫번째 파라미터에는 (직접 구현한) 리듀서 함수를 넣고, 두번째 파라미터에는 해당 리듀서의 기본값을 넣어준다.(useState처럼)
- 이 Hook을 사용하면 state 값과 dispatch 함수를 받아온다.
  - state는 현재 가리키고 있는 상태
  - dispatch는 액션을 발생시키는 함수
  - dispatch(action) 과 같은 형태로 파라미터로 action을 넣어주면 리듀서 함수가 호출되는 구조
- useReducer를 사용했을 때의 장점은 **컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 것.**

- useReducer를 사용하여 인풋 상태를 관리할 수 있다.
  - useState를 여러 번 선언하는 대신에 useReducer로 인풋을 관리하면 인풋의 개수가 많아져도 코드를 깔끔하게 유지할 수 있다.

## useMemo

- 함수 컴포넌트 내부에서 발생하는 연산을 최적화하는 Hook

```javascript
const avg = useMemo(() => getAverage(list), [list]);
```

## useCalback

- useMemo와 비슷한 함수
- 만들어 놨던 함수를 재사용하여 렌더링 성능을 최적화하는 Hook

```javascript
const onChange = useCallback((e) => {
	setNumber(e.target.value);
}, []);

const onInsert = useCallback(() => {
	const nextList = list.concat(parseInt(number));
	setList(nextList);
	setNumber("");
}, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성
```

- 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두번째 파라미터에는 배열을 넣는다.
- 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시한다.
- 비어있는 배열을 넣게 되면 컴포넌트가 렌더링될 때 만들었던 함수를 계속해서 재사용
- 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 한다.
  - onInsert의 경우 기존의 number와 list를 조회해서 nextList를 생성하기 때문에 배열 안에 number와 list를 꼭 넣어 주어야 한다.

## useRef

- 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해준다.
- useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킨다.
- 추가로 컴포넌트 로컬 변수를 사용해야 할 때도 활용할 수 있다.
  > 여기서 로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미한다.
  - ref 안의 값이 바뀌어도 컴포넌트는 렌더링되지 않는다.
  - 렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식으로 코드를 작성하자.

## 커스텀 Hooks

- 여러 컴포넌트에서 비슷한 기능을 공유할 경우, 커스텀 Hook을 작성하여 로직을 재사용할 수 있다.
- 기존에 Hook을 사용하여 작성했던 로직을 분리한 뒤 export해주면 된다.
  ex) useInputs.js

```javascript
import { useReducer } from "react";

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	};
}

export default function useInputs(initialForm) {
	const [state, dispatch] = useReducer(reducer, initialForm);
	const onChange = (e) => {
		dispatch(e.target);
	};
	return [state, onChange];
}
```

## 다른 Hooks

- 다른 개발자가 만든 Hooks도 라이브러리로 설치하여 사용할 수 있다.
- https://nikgraf.github.io/react-hooks/
- https://github.com/rehooks/awesome-react-hooks

## 정리

- 클래스형 컴포넌트를 사용하지 않고도 Hooks 패턴을 사용하면 대부분의 기능을 구현할 수 있다.
  > 그렇다고 setState를 사용하는 방식이 잘못된 것은 아니다.
- 리액트 매뉴얼에서는 함수 컴포넌트와 Hooks를 사용할 것을 권장하고 있습니다.
- 일단 함수 컴포넌트와 Hooks를 사용하고, 0000000필요한 상황에서는 클래스형 컴포넌트를 구현하는 것이 좋다.
