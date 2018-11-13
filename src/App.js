import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './TodoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: '', description: '', todos: []}
  }

  inputDescrChanged = (event) => {
    this.setState({description: event.target.value});
  }

  inputDateChanged = (event) => {
    this.setState({date: event.target.value});
  }

  deleteRow = (event) => {
      this.setState({
          todos: this.state.todos.filter((todo, i) => i != event.target.id)
      });
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo = {date: this.state.date, desc: this.state.description}
    let arr = this.state.todos;
    arr.push(newTodo);
    console.log(arr);
    this.setState({
      todos: arr
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>

          <form onSubmit={this.addTodo}>
          Description:
            <input type="text" onChange={this.inputDescrChanged} value={this.state.description}/>
          Date:
            <input type="date" onChange={this.inputDateChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </form>
        <TodoTable todos={this.state.todos} />
        <button id={index} onClick={this.deleteRow}>Delete</button>
      </div>
      </div>
    );
  }
}

export {default} from App;
