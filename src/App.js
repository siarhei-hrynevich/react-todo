import './App.css';
import React from 'react';
import Task from './models/Task'

function ItemComponent({ item }) {
  return (
    <div class="Row">
      <div>
        <input type="checkbox" checked={item.isCompleted()}></input>
        <label>{item.getText()}</label>
      </div>
      <a class="Image-button">
        <img alt="delete" src="delete_icon.png"></img>
      </a>
    </div>
  );
}

function Input() {
  return (
    <div class="Row">
      <div class="Line">
        <input class="Text-input" type="text"></input>
        <a class="Image-button">
          <img alt="add" src="add_icon.png"></img>
        </a>
      </div>
    </div>
  );
}

function List({ items }) {
  const elements = items.map(i => <ItemComponent item={i} />);
  return (
    <div>
      {elements}
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [new Task('task 1', true), new Task('task 2', false)] };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Todos
        </p>
          <Input />
          <List items={this.state.items} />
        </header>
      </div>
    );
  }
}

export default App;
