import React from 'react';
import './TodoList.css';
import ListItem from './ListItem/ListItem';

const TodoList = (props) => {
	let listOfTodos = [];
	
	listOfTodos = props.todos.map((item) => {
		return (
			<ListItem key={item.id} done={item.completed}>{item.title}</ListItem>
		);
	});
  return (
  	<div className="list_container">
  		{listOfTodos}
  	</div>
  );
};

export default TodoList;