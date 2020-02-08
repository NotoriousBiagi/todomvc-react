import React, { useState, useEffect } from 'react';
import TodoService from '../../services/TodoService';
import toastr from '../../toastr';
import 'toastr/build/toastr.min.css';
import TodoFooter from './TodoFooter';
import 'font-awesome/css/font-awesome.min.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const TodoApp = () => {
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

  return (
    <section>
      <article className="todoapp">
        <header className="header">
          <h1 style={{ top: '-175px' }}>todos</h1>
        </header>

        <main className="main"></main>
        <TodoFooter />
      </article>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/drmikeh/">Dr. Mike Hopper</a>
        </p>
      </footer>
    </section>
  );
};

export default TodoApp;
