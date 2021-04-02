import './css/App.css';
import React, { useState } from 'react';
import List from './components/List';
import Input from './components/Input';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  
    this.changeTaskState = this.changeTaskState.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  changeTaskState = (index) => {
    const items = this.state.items;
    items[index].completed = !items[index].completed;

    this.setState(state => ({ items: items }));
  }

  deleteTask = (index) => {
    const newItems = this.state.items.filter((e, i) => i !== index);
    this.setState(state => ({ 
      items: newItems
    })); 
  }

  addTask = (task) => {
    while (this.contains(this.state.items, e => e.text === task.text)) 
      task.text += '1';
    this.setState(state => ({
        items: [
          ...state.items,
          task
        ]
    }))
  }

  contains = (array, pattern) => {
    for (let i = 0; i < array.length; i++) {
      if (pattern(array[i])) {
        return true;
      }
    }
    return false;
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Todos
          </p>
          <Input onAdd={this.addTask}/>
          <List items={this.state.items} onClick={this.changeTaskState} onDelete={this.deleteTask} />
        </header>
      </div>
    );
  }
}

export default App;
