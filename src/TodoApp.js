import React from 'react';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';
import TodoTemplate from './Components/TodoTemplate';

const TodoApp = () => {
  return (
    <TodoTemplate>
      TodoApp을 만들자!
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default TodoApp;
