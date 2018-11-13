import React, { Component } from 'react';
import './App.css';

class TodoTable extends Component {
  constructor(props) {
    super(props);
  }
}

render() {
  return (
    <div className="App">
        <table>
          <tr>
            <th>Description</th>
            <th>Date</th>
          </tr>
          {this.props.todos.map((item, index) =>
          <tr key={index}>
              <td>{item.desc}</td>
              <td>{item.date}</td>
          </tr>)}
        </table>
    </div>
  );
}
export {default} from TodoTable;
