Solution branch: `a-1-get`

## Instructions

Get todos from backend service.

## Hints

Use React hooks!

- The `useEffect` hook is useful for functions the cause side effects–like retrieving data from an API.
- The `useState` hook is useful for storing and updating state in a functional programming style.

## Code snippets

TodoApp.js

```javascript
import React, { useState, useEffect } from 'react';
import TodoService from '../../services/TodoService';

// ...

const [todos, setTodos] = useState([]);

// initial load of todos data
useEffect(() => {
  try {
    TodoService.get()
      .then(response => {
        setTodos(response.data);
      })
      .catch(err => {
        toastr.error(err);
      });
  } catch (error) {
    toastr.error(error);
  }
}, []);
/* The 2nd arg above is a watch list of variables that trigger the effect.
 * If the list is empty, the effect only executes once (cDM).
 * If the list is not provided, the effect executes with every change
 * to props or state (cDM + cDU).
 * If the list contains some variables, the effect executes whenever any of
 * those variables are reassigned (cDM, cDU with checks).
 */
```
