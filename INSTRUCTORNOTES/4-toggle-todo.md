Solution branch: `b-2-toggle`

## Instructions

Toggle the `completed` status of a `todo`.

## Hints

- Create a `onToggleCompleted` function which looks up a `todo` by its `id` and changes the `completed` status.

- Create an `async` function `saveTodo` which receives a single `todo` to be updated as an argument.

## Code snippets

TodoApp.js

```javascript
async function saveTodo(updatedTodo) {
  try {
    const response = await TodoService.put(updatedTodo);
    const updatedTodoFromServer = response.data;
    const newTodos = todos.map(todo =>
      todo.id !== updatedTodoFromServer.id ? todo : updatedTodoFromServer
    );
    setTodos(newTodos);
  } catch (error) {
    toastr.error(error);
  }
}

function onToggleCompleted(id) {
  const foundTodo = todos.find(todo => todo.id === id);
  const updatedTodo = {
    ...foundTodo,
    completed: !foundTodo.completed
  };
  saveTodo(updatedTodo);
}

// ...

<TodoList todos={todos} toggle={onToggleCompleted} />;
```

TodoList.js

```javascript
const TodoList = ({ todos, toggle }) => {

// ...

    <Todo todo={todo} key={todo.id} toggle={toggle} />

```

Todo.js

```javascript
const Todo = ({ todo, toggle }) => {
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
      </div>
    </li>
  );
};
```
