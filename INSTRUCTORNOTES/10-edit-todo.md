Solution branch: `d-3-edit`

## Instructions

Create an edit feature for todos.

## Hints

- Use the `useRef` hook

## Code snippets

TodoApp.js

```javascript
function onUpdateTitle(id, title) {
  const foundTodo = todos.find(todo => todo.id === id);
  const updatedTodo = {
    ...foundTodo,
    title
  };
  saveTodo(updatedTodo);
}
```

Todo.js

```javascript
import React, { useState, useRef } from 'react';

// ...

const Todo = ({ todo, toggle, save, remove }) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const editInputRef = useRef();

  function onSave() {
    const title = editTitle.trim();
    if (title) {
      save(todo.id, title);
      setEditing(false);
      setEditTitle(title);
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      setEditTitle(todo.title);
      setEditing(false);
    } else if (event.key === 'Enter') {
      onSave();
    }
  }

  function onChange(event) {
    if (editing) {
      setEditTitle(event.target.value);
    }
  }

// ...


  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editing
      })}
    >

// ...

<label onDoubleClick={onEdit}>{editTitle}</label>

// ...

      <input
        data-testid={`title-input-${todo.id}`}
        ref={editInputRef}
        type="text"
        className="edit"
        value={editTitle}
        onBlur={onSave}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
```
