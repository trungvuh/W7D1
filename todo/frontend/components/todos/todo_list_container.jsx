import React from 'react';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import {receiveTodo} from '../../actions/todo_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
