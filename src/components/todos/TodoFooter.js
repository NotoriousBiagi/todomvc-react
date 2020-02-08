import React from 'react';
import { NavLink } from 'react-router-dom';

const TodoFooter = ({ activeCount }) => {
  const activeTodoWord = activeCount === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} left
      </span>

      <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="selected">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName="selected">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="selected">
            Completed
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default TodoFooter;
