import React, { useState } from 'react';
import '../css/App.css';
import Task from '../models/Task';

export default function Input({onAdd}) {
    const [state, setState] = useState()
    return (
      <div class="Row">
        <div class="Line">
          <input class="Text-input" onChange={(e => setState(e.target.value))} type="text"/>
          <a class="Image-button" onClick={() => onAdd(new Task(state, false))} >
            <img alt="add" src="add_icon.png"></img>
          </a>
        </div>
      </div>
    );
}
  