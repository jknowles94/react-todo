import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return (
  	<div className="item">
  		{props.children}
  	</div>
  );
};

export default ListItem;