# Todo app

## Table of Contents

- [Todo app](#todo-app)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Installation](#installation)
  - [Starting the development servers](#starting-the-development-servers)
  - [Using the todo application](#using-the-todo-application)
    - [Viewing todos](#viewing-todos)
    - [Adding a new todo](#adding-a-new-todo)
    - [Filtering todos](#filtering-todos)
    - [Deleting todos](#deleting-todos)
  - [Quiting the application](#quiting-the-application)
- [Code-along](#code-along)
  - [Starting the code-along](#starting-the-code-along)
    - [Step One](#step-one)
    - [Step Two](#step-two)
  - [Follow the exercise instructions](#follow-the-exercise-instructions)
  - [git branches](#git-branches)

## About

_This was created for a workshop at the University of Texas–Austin providing technical training for participants in a [WiCS](https://www.cs.utexas.edu/~wics/) [hackathon](https://www.cs.utexas.edu/~wics/hackathon/index.html). This single-page application (SPA) is a classic "todo" app that uses [React](https://reactjs.org/) (with [Hooks](https://reactjs.org/docs/hooks-reference.html) for state management), [Todomvc](http://todomvc.com/) styling, and a JSON server for local development. This app was based on one of the "flavors" of a React app featured in my colleague Dr. Mike Hopper's magnum opus [React Todo Flavors](https://github.com/drmikeh/react-todos-flavors) which is a project (complete with tests!) that compares several different methods of state management in React. The code here is mostly Mike's, with some changes here and there to facilitate the educational and presentational components of the workshop._

## Installation

Open terminal and enter the following commands at the command line prompt.

> If you have not installed git you can follow installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

```shell
$ git clone <repo URL>

$ cd <project that was just cloned>

$ yarn # installs dependencies listed in `package.json`
```

## Starting the development servers

Open the shell in another terminal split vertically.

> It shouldn't matter too much what your OS or preferred terminal application is, but it's helpful if you learn keyboard shortcuts for your tools. E.g., Mac/iTerm users press <kbd>command</kbd>+<kbd>D</kbd> and see what happens.

```shell
$ cd <project directory>

$ yarn server # starts JSON server at localhost:4000
```

The terminal output includes this info:

```shell
Resources
  http://localhost:4000/todos
```

Go visit that URL in your favorite web browser. You will see JSON data served from `db.json`.

With the JSON server still running, go back to the first terminal.

```shell
$ yarn start # react application will start!
```

## Using the todo application

Visit [http://localhost:3000](http://localhost:3000) in your favorite web browser. You will see a todo application made with React!

### Viewing todos

The checkbox to the left of a todo item will toggle the item’s status as _Completed_ or _Active_. Links will filter todos based on a particular status. Another option is for all todos to be displayed at once.

### Adding a new todo

A new _Active_ todo can be added.

### Filtering todos

Todos can be filtered by _All_, _Active_, and _Completed_.

### Deleting todos

_Completed_ todos can all be cleared at once.

> Refresh the browser tab pointing at [http://localhost:4000/todos](http://localhost:4000/todos) and observe that the changes in the JSON server's state are in sync with the React app.

## Quiting the application

When you’re done, send a `SIGINT` to each server and terminate the processes by pressing <kbd>control</kbd>+<kbd>C</kbd> in the terminals and then exit the shell.

# Code-along

Different branches are included in this repo to facilitate a code-along.

## Starting the code-along

### Step One

Follow these steps documented earlier in this `README`:

- [Installation](#installation)
- [Starting the development servers](#starting-the-development-servers)

### Step Two

Checkout the starter branch

```shell
$ git checkout <starter branch>
```

## Follow the exercise instructions

The exercise instructions are in the project [wiki](https://github.com/kylebustard/todomvc-react/wiki)

## git branches

The git repo includes branches with starter code, the finished application, and all the steps in between. These tables may help to visualize the branches.

| Starter Code | Finished App |
| ------------ | ------------ |
| `starter`    | `finished`   |

| Getting & Showing | Adding & Toggling | Filtering          | Deleting & Editing    |
| ----------------- | ----------------- | ------------------ | --------------------- |
| `a-1-get`         | `b-1-add`         | `c-1-filter`       | `d-1-delete`          |
| `a-2-show`        | `b-2-toggle`      | `c-2-link`         | `d-2-clear-completed` |
|                   |                   | `c-3-active-count` | `d-3-edit`            |

With the exception of the `starter` and `finished` branches, each branch is named with a prefix like `a-1-`. This branch name signature is `<letter>-<number>-<feature implemented in current branch>`. The branches are cumulative and the ordering is alphabetized first and then numeric (i.e., `b-1-add` builds on the code in `a-2-show` which builds on `a-1-get`).
