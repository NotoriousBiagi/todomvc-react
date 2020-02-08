import React from 'react';
import classNames from 'classnames';

const Todo = ({ todo }) => {
  return (
    <li
      className={classNames({
        completed: todo.completed
      })}
    >
      <div className="view">
        <label>{todo.title}</label>
      </div>
    </li>
  );
};

export default Todo;
