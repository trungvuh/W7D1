//this is our main-entry file

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';




document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  const rootEl = document.getElementById('root');

  ReactDOM.render(<div>Hello</div>, rootEl);
});
