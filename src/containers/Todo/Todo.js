import React, { Component } from 'react';
import './Todo.css';
import TodoList from '../../components/TodoList/TodoList';
import AddNewItem from '../../components/addNewItem/addNewItem';

class Todo extends Component {
  render() {
    return (
    	<div className="todo_container">
    		<h1>Tasks</h1>
    		<TodoList></TodoList>
    		<AddNewItem></AddNewItem>
    	</div>
    );
  }
}

export default Todo;