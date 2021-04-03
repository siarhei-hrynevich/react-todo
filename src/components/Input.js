import React, { useState } from 'react';
import '../css/App.css';
import Task from '../models/Task';

export default function Input({ onAdd, onSearch }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');
  
  return (
    <div>
      <div className="Line">
        <input className="Text-input" onChange={(e => { setText(e.target.value); onSearch(e.target.value, priority) })} type="text" />
        <a className="Image-button" onClick={() => onAdd(new Task(text, priority, false))} >
          <img alt="add" src="add_icon.png"></img>
        </a>
        <a className="Image-button" onClick={() => onSearch('', 'All')} >
          <img alt="reset" src="reset_icon.png"></img>
        </a>
        <select className="Text-input" onChange={e => { setPriority(e.target.value); onSearch(text, e.target.value); }}>
          <option value="High">High priority</option>
          <option value="Average">Average priority</option>
          <option value="Low">Low priority</option>
        </select>
      </div>
    </div>
  );
}
