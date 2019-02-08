import React, { Component } from 'react';
import './App.css';
import Todo from './containers/Todo/Todo';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Todo list</h1>
        <Todo></Todo>
      </React.Fragment>
    );
  }
}

export default App;
