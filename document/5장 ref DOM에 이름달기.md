## 리액트 컴포넌트 id 사용은 특수한 경우가 아니면 권장하지 않는다.

> 재사용되는 컴포넌트는 id가 중복될 수 있기 때문.  
> 대신 ref를 사용하면 된다.  
> ref는 전역적으로 작동하지 않고, 컴포넌트 내부에서만 작동하기 때문  
> 만약 다른 라이브러리와 프레임워크를 사용하기 때문에 id를 써야하는 상황이라면 컴포넌트를 생성할 때마다 추가 텍스트를 붙여서 구분을 지어주면 좋다.

## ref는 어떤 상황에서 사용해야 할까?

- 특정 DOM에 작업을 해야 할 때
- **DOM을 꼭 직접적으로 건드려야 할 떄**
- state만으로 해결할 수 없는 기능
  - 특정 input에 포커스 주기
  - 스크롤 박스 조작하기
  - Canvas 요소에 그림 그리기 등등 DOM에 직접 접근해야 하는 경우

## ref를 사용하는 방법은 두가지

1. 콜백 함수를 통한 ref 설정
   - ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달
   - ref 값을 파라미터로 전달
   - 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정
   ```javascript
   <input
   	ref={(ref) => {
   		this.input = ref;
   	}}
   />
   ```
   > this.input은 input 요소의 DOM을 가리킵니다.
2. createRef를 통한 ref 설정

   - 리액트에 내장되어 있는 createRef 함수 사용
   - 더 적은 코드로 쉽게 사용할 수 있다.
   - 컴포넌트 내부에서 멤버 변수로 createRef를 담아준다.

   ```javascript
   import { Component } from "react";

   class RefSample extends Component {
   	input = React.createRef();

   	handleFocus = () => {
   		this.input.current.focus();
   	};

   	render() {
   		return (
   			<div>
   				<input ref={this.input} />
   			</div>
   		);
   	}
   }

   export default RefSample;
   ```

   - DOM에 접근하기 위해서는 this.input.current를 조회하면 된다.
     > 콜백 함수와 다른 점은 .current를 뒤에 붙여주어야 한다.

### **두가지 중 편한 방법을 사용하면 된다.**

## 컴포넌트에 ref 달기

```javascript
<MyComponent
	ref={(ref) => {
		this.myComponent = ref;
	}}
/>
```
