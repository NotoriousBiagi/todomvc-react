import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggle }) => {
  const todoList = todos.map(todo => (
    <Todo todo={todo} key={todo.id} toggle={toggle} />
  ));
  return <ul className="todo-list">{todoList}</ul>;
};

export default TodoList;
