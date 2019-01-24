import React from 'react';
import './TodoList.css';
import ListItem from './ListItem/ListItem';

const TodoList = (props) => {
  return (
  	<div className="list_container">
  		<ListItem>Item 1</ListItem>
  		<ListItem>Item 2</ListItem>
  		<ListItem>Item 3</ListItem>
  	</div>
  );
};

export default TodoList;