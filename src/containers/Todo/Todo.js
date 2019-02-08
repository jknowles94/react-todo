import React, { Component } from 'react';
import './Todo.css';
import TodoList from '../../components/TodoList/TodoList';
import AddNewItem from '../../components/addNewItem/addNewItem';
import axios from 'axios';
import { resolve } from 'url';
import { throws } from 'assert';

class Todo extends Component {
	state = {
		todos: []
	}
	
	async componentDidMount() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
			const data = await response.data;
			this.setState({todos: data});
		} catch (err){
			console.log(err);
		}
	}

	async addTodoHandler(newItem) {
		const {title, completed} = newItem
		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed
			});
			const data = await response.data;
			const newTodoList = [...this.state.todos, data];
			this.setState({todos: newTodoList});
		} catch(err) {
			console.log(err);
		}
	}

	async deleteHandler(id) {
		try {
			await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
			let todos = [...this.state.todos];
			const newTodo = todos.filter(el => el.id !== id);
			this.setState({todos: newTodo});
		} catch (err) {
			console.log(err);
		}
	}

	addNewItemHandler = () => {
		let title = prompt("Please enter the task?");
		const newTodo = {
			title: title,
			completed: false
		};
		this.addTodoHandler(newTodo);
	}

	deleteItemHandler = (id) => {
		this.deleteHandler(id);
	}

	completedHandler = (id) => {
		// create dup of state todos
		const todos = [...this.state.todos];

		const index = todos.findIndex((el) => {
			return el.id === id;
		});

		todos[index].completed = true;

		this.setState({todos: todos});
	}

  render() {
    return (
    	<div className="todo_container">
    		<h1>Tasks</h1>
    		<TodoList todos={this.state.todos} completedHandler={this.completedHandler} deletedHandler={this.deleteItemHandler}></TodoList>
    		<AddNewItem addItem={this.addNewItemHandler}></AddNewItem>
    	</div>
    );
  }
}

export default Todo;