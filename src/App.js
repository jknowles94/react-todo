import React, { Component } from 'react';
import './App.css';
import Todo from './containers/Todo/Todo';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Todo list</h1>
        <ul>
          <li>Ability to create new list items</li>
          <li>Ability to set list item as completed</li>
          <li>Ability to delete list items</li>
          <li>Add animations to the different handlers</li>
        </ul>
        <Todo></Todo>
      </React.Fragment>
    );
  }
}

export default App;
