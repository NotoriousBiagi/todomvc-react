Solution branch: `a-2-show`

## Instructions

Show the todos retrieved from the backend service.

## Hints

Use React presentational aka functional components. These are pure functions that don't have side effects.

- Make a `TodoList` component that receives `todos` from `props`.
- `map` over the `todos` Array and return a new `Todo` component for each `todo`.

## Code snippets

TodoList.js

```javascript
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  const todoList = todos.map(todo => <Todo todo={todo} key={todo.id} />);
  return <ul className="todo-list">{todoList}</ul>;
};

export default TodoList;
```

Todo.js

```javascript
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
```
