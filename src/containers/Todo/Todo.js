import React, { Component } from 'react';
import './Todo.css';
import TodoList from '../../components/TodoList/TodoList';

class Todo extends Component {
  render() {
    return (
    	<div className="todo_container">
    		<h1>Tasks</h1>
    		<TodoList></TodoList>
    	</div>
    );
  }
}

export default Todo;