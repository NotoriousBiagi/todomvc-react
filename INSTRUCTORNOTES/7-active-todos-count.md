Solution branch: `c-3-active-count`

## Instructions

Track count of active todos (i.e., todos that are not completed).

## Hints

- Use the native Array `reduce` method.

## Code snippets

TodoApp.js

```javascript
  const completedCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );
  const activeCount = todos.length - completedCount;

// ...

        </main>
        <TodoFooter activeCount={activeCount} />
      </article>

```

TodoFooter.js

```javascript
const TodoFooter = ({ activeCount }) => {
  const activeTodoWord = activeCount === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} left
      </span>
```
