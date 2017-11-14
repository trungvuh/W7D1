import React from 'react';
import ToDoListItem from './todo_list_item';

const TodoList = ({todos}) => (
  <div>
    <ul>
      {
        todos.map( (todo, index) => (
          <ToDoListItem key={index} todo={todo}/>
        ))
      }
    </ul>
  </div>
);


export default TodoList;
