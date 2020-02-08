import React from 'react';
import { NavLink } from 'react-router-dom';

const TodoFooter = () => {
  return (
    <footer className="footer">
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
