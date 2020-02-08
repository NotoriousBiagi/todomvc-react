Solution branch: `c-2-link`

## Instructions

Provide links for todos based on `completed` status.

## Hints

- Use React Router

## Code snippets

TodoApp.js

```javascript
import { Route } from 'react-router-dom';

// ...

        <main className="main">
          <Route
            path="/:filter?"
            render={props => {
              const filter = props.match.params.filter || ALL_TODOS;
              const todosToShow = filterTodos(filter);
              return (
                <TodoList
                  {...props}
                  todos={todosToShow}
                  toggle={onToggleCompleted}
                />
              );
            }}
          />
        </main>
        <TodoFooter activeCount={activeCount} />

```

TodoFooter.js

```javascript
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
```
