import React, { useCallback, useReducer, useRef, useState } from 'react';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import TodoTemplate from './Components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// useReducer를 사용하여 최적화
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const TodoApp = () => {
  // 기존 방식 or useState의 함수 업데이트 기능
  // const [todos, setTodos] = useState(createBulkTodos);

  // useReducer 사용
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  // 기존 방식 (최적화전)
  // const onInsert = useCallback(
  //   (text) => {
  //     const todo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };
  //     setTodos([...todos, todo]);
  //     nextId.current += 1;
  //   },
  //   [todos],
  // );

  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos],
  // );

  // const onToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   },
  //   [todos],
  // );

  // useState의 함수형 업데이트 기능 사용
  // const onInsert = useCallback((text) => {
  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   setTodos((todos) => todos.concat(todo));
  //   nextId.current += 1;
  // }, []);

  // const onRemove = useCallback((id) => {
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);

  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }, []);

  // useReducer 사용
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default TodoApp;
