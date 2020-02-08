import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  const todoList = todos.map(todo => <Todo todo={todo} key={todo.id} />);
  return <ul className="todo-list">{todoList}</ul>;
};

export default TodoList;
