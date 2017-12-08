import React, { Component } from 'react';
import InputTodo from '../InputTodo';
import TodoList from '../TodoList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>TODO</h1>
        <InputTodo/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
