import React from 'react';
import './ListItem.css';
import Bin from '../../../rubbish-bin.svg';

const ListItem = (props) => {
	let classes = props.done ? "item done" : "item";
  return (
  	<div className={classes}>
  		<div onClick={props.completed}>{props.children}</div>
			<img className="delete-bin" onClick={props.deleted} src={Bin}/>
  	</div>
  );
};

export default ListItem;