import React, { Component } from 'react';
import './Todo.css';
import TodoList from '../../components/TodoList/TodoList';
import AddNewItem from '../../components/addNewItem/addNewItem';
import axios from 'axios';

class Todo extends Component {
	state = {
		todos: []
	}
	
	async componentDidMount() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
		const data = await response.data;
		this.setState({todos: data});
	}

  render() {
    return (
    	<div className="todo_container">
    		<h1>Tasks</h1>
    		<TodoList todos={this.state.todos}></TodoList>
    		<AddNewItem></AddNewItem>
    	</div>
    );
  }
}

export default Todo;