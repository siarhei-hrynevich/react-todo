import React, { useState } from 'react';
import '../css/App.css';
import Task from '../models/Task';

export default function Input({onAdd, onSearch}) {
    const [state, setState] = useState('')
    return (
      <div className="Row">
        <div className="Line">
          <input className="Text-input" onChange={(e => { setState(e.target.value); onSearch(e.target.value) })} type="text"/>
          <a className="Image-button" onClick={() => onAdd(new Task(state, false))} >
            <img alt="add" src="add_icon.png"></img>
          </a>
        </div>
      </div>
    );
}
  