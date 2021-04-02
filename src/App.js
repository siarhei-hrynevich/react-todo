import './css/App.css';
import React, { useState } from 'react';
import List from './components/List';
import Input from './components/Input';
import AlertPopup from './components/AlertPopup';
import { AlertContext } from './components/AlertContext';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { renderedItems: [], items: [] };
  }

  changeTaskState = (index) => {
    const items = this.state.renderedItems;
    items[index].completed = !items[index].completed;

    this.setState(state => ({ items: items }));

    this.context.showMessage(`Task ${items[index].completed ? '' : 'not '} complete`);
  }

  deleteTask = (index) => {
    const newItems = this.state.items.filter((e, i) => i !== index);
    this.setState(state => ({ 
      items: newItems,
      renderedItems: newItems
    })); 
    this.context.showMessage('Task was deleted');
  }

  addTask = (task) => {
    if (task.text == undefined || task.text === '')
      return;
    while (this.contains(this.state.items, e => e.text === task.text)) {
      task.text += '1';
    }
    this.setState(state => ({
        items: [
          ...state.items,
          task
        ],
        renderedItems: [
          ...state.items,
          task
        ]
    }))

    this.context.showMessage('Task was added');
  }

  contains = (array, pattern) => {
    for (let i = 0; i < array.length; i++) {
      if (pattern(array[i])) {
        return true;
      }
    }
    return false; 
  }

  search = (searched, priority) => {    
    console.log(priority);
    this.setState(state => ({
      items: state.items,
      renderedItems: 
        (priority === 'All' ? state.items : state.items.filter(item => item.priority === priority))
          .filter(item => item.text.includes(searched))
    }));
  }

  componentDidMount() {
    const itemsFromStorage = localStorage.getItem('items');
    if (!itemsFromStorage) return;
    const items = JSON.parse(itemsFromStorage);
    if (!items) return;
    this.setState(state => ({
      items: items,
      renderedItems: items
    }));
  }

  componentWillUnmount() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  componentDidUpdate() {
    localStorage.setItem('items', JSON.stringify(this.state.items));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Todos</p>
          <Input onAdd={this.addTask} onSearch={this.search}/>
          <AlertPopup />
          <List items={this.state.renderedItems} onClick={this.changeTaskState} onDelete={this.deleteTask} />
        </header>
      </div>
    );
  }
}

App.contextType = AlertContext;

export default App;
