import React from 'react';
import './TodoList.css';
import ListItem from './ListItem/ListItem';

const TodoList = (props) => {
  return (
  	<div className="list_container">
  		<ListItem done={false}>Item 1</ListItem>
  		<ListItem done={false}>Item 2</ListItem>
  		<ListItem done={false}>Item 3</ListItem>
  		<ListItem done={false}>Item 3</ListItem>
  		<ListItem done={false}>Item 3</ListItem>
  		<ListItem done={true}>Item 3</ListItem>
  		<ListItem done={true}>Item 3</ListItem>
  	</div>
  );
};

export default TodoList;