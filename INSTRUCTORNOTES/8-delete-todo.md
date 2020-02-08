Solution branch: `d-1-delete`

## Instructions

Provide a feature that will delete a single todo.

## Hints

- Create an `async` function `onDelete`

## Code snippets

TodoApp.js

```javascript
async function onDelete(id) {
  try {
    // Filter all todos except the one to be removed
    const remaining = todos.filter(todo => todo.id !== id);
    await TodoService.delete(id);
    setTodos(remaining);
  } catch (error) {
    toastr.error(error);
  }
}

// ...

return (
  <TodoList
    {...props}
    todos={todosToShow}
    toggle={onToggleCompleted}
    remove={onDelete}
  />
);
```

Todo.js

```javascript
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
```
