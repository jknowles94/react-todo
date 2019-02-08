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
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
			const data = await response.data;
			this.setState({todos: data});
		} catch (err){
			console.log(err);
		}
	}

	async addTodoHandler(newItem) {
		try {
			const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newItem);
			const data = await response.data;
			const newTodoList = [...this.state.todos, data];
			this.setState({todos: newTodoList});
		} catch(err) {
			console.log(err);
		}
	}

	addNewItemHandler = () => {
		const newTodo = {
			title: "New test todo",
			completed: false
		};
		this.addTodoHandler(newTodo);
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
    		<TodoList todos={this.state.todos} completedHandler={this.completedHandler}></TodoList>
    		<AddNewItem addItem={this.addNewItemHandler}></AddNewItem>
    	</div>
    );
  }
}

export default Todo;