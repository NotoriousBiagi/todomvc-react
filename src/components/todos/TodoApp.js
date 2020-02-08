import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import TodoService from '../../services/TodoService';
import toastr from '../../toastr';
import 'toastr/build/toastr.min.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './TodoViewStates';
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

  async function onAdd(val) {
    try {
      const todo = {
        title: val,
        completed: false
      };
      const response = await TodoService.post(todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      toastr.error(error);
    }
  }

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

  const completedCount = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );
  const activeCount = todos.length - completedCount;

  return (
    <section>
      <article className="todoapp">
        <header className="header">
          <h1 style={{ top: '-175px' }}>todos</h1>
          <NewTodoForm addTodo={onAdd} />
        </header>

        <main className="main">
          <Route
            path="/:filter?"
            render={props => {
              const filter = props.match.params.filter || ALL_TODOS;
              const todosToShow = filterTodos(filter);
              return (
                <TodoList
                  {...props}
                  todos={todosToShow}
                  toggle={onToggleCompleted}
                />
              );
            }}
          />
        </main>
        <TodoFooter activeCount={activeCount} />
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
