import React from 'react';
import ToDoListItem from './todo_list/todo_list_item';
import TodoForm from './todo_list/todo_form';

const TodoList = ({todos}) => (
  <div>
    <h1>Our Todo List</h1>
    <ul>
      {
        todos.map( (todo, index) => (
          <ToDoListItem key={index} todo={todo}/>
        ))
      }
    </ul>
    <br />
    <TodoForm />
  </div>
);


export default TodoList;
