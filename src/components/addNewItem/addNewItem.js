import React from 'react';
import './addNewItem.css';

const AddNewItem = (props) => {
  return (
  	<div className="addNewItem" onClick={props.addItem}>
  		<span>+</span>
  	</div>
  );
};

export default AddNewItem;