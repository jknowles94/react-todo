import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
	let classes = props.done ? "item done" : "item";
  return (
  	<div className={classes}>
  		{props.children}
  	</div>
  );
};

export default ListItem;