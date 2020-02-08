Solution branch: `c-1-filter`

## Instructions

Filter `todos` by `completed` status.

## Hints

- Use a native Array `filter` method.
- Use a `switch` statement with cases based on `completed` status.

## Code snippets

TodoApp.js

```javascript
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './TodoViewStates';

// ...

function filterTodos(viewState) {
  return todos.filter(todo => {
    switch (viewState) {
      case ALL_TODOS:
        return true;
      case ACTIVE_TODOS:
        return !todo.completed;
      case COMPLETED_TODOS:
        return todo.completed;
      default:
        return false;
    }
  });
}

// ...

<TodoList todos={filterTodos(ALL_TODOS)} toggle={onToggleCompleted} />;
```

TodoViewStates.js

```javascript
const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';

export { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS };
```
