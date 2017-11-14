import React from 'react';
import ToDoListItem from './todo_list/todo_list_item';
import TodoForm from './todo_list/todo_form';
// import receiveTodo from '../../actions/todo_actions';

class TodoList extends React.Component {


  render() {
    let {todos, receiveTodo } = this.props;
    return (
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
        <TodoForm receiveTodo={receiveTodo}/>
      </div>
    );
  }
}



export default TodoList;
