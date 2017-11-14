import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);


// const newTodos = [
//   {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   }
// ]
