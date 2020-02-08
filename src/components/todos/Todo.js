import React from 'react';
import classNames from 'classnames';

const Todo = ({ todo, toggle, remove }) => {
  return (
    <li
      className={classNames({
        completed: todo.completed
      })}
    >
      <div className="view">
        <input
          data-testid={`toggle-button-${todo.id}`}
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            toggle(todo.id);
          }}
        />
        <label>{todo.title}</label>
        <button
          data-testid={`delete-button-${todo.id}`}
          className="destroy"
          onClick={() => {
            remove(todo.id);
          }}
        />
      </div>
    </li>
  );
};

export default Todo;
