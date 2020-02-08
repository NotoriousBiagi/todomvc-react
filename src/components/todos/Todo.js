import React, { useState, useRef } from 'react';
import classNames from 'classnames';

const Todo = ({ todo, toggle, save, remove }) => {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const editInputRef = useRef();

  function onEdit() {
    setEditing(true);
    editInputRef.current.focus();
  }

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

  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editing
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
        <label onDoubleClick={onEdit}>{editTitle}</label>
        <button
          data-testid={`delete-button-${todo.id}`}
          className="destroy"
          onClick={() => {
            remove(todo.id);
          }}
        />
      </div>
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
    </li>
  );
};

export default Todo;
