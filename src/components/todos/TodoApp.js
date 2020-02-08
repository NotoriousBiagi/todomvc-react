import React from 'react';
import toastr from '../../toastr';
import 'toastr/build/toastr.min.css';
import TodoFooter from './TodoFooter';
import 'font-awesome/css/font-awesome.min.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

const TodoApp = () => {
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
