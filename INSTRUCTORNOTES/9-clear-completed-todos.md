Solution branch: `d-2-clear-completed`

## Instructions

Create a feature which deletes all completed todos.

## Hints

- Make the button only appear when there is at least one completed todo.

## Code snippets

TodoApp.js

```javascript
function onDeleteCompleted() {
  const keepers = todos.filter(todo => !todo.completed);
  const losers = todos.filter(todo => todo.completed);
  const promises = losers.map(todo => TodoService.delete(todo.id));
  Promise.all(promises)
    .then(_responses => {
      setTodos(keepers);
    })
    .catch(error => {
      toastr.error(error);
    });
}

// ...

<TodoFooter
  activeCount={activeCount}
  completedCount={completedCount}
  onClearCompleted={onDeleteCompleted}
/>;
```

TodoFooter.js

```javascript
const TodoFooter = ({activeCount, completedCount, onClearCompleted}) => {

// ...

    const clearButton = completedCount > 0 ? (
        <button
            className = "clear-completed"
            onClick = {onClearCompleted}>
        Clear completed</button>
    ) : null;


// ...

      </ul>
      {clearButton}
    </footer>
  );
};
```
