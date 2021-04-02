import React from "react";
import '../css/App.css';

export default function Item({ item, onClick, onDelete }) {
    return (
      <div class="Row">
        <div>
          <input type="checkbox" onClick={onClick} checked={item.completed}></input>
          <label>{item.text}</label>
        </div>
        <a class="Image-button" onClick={onDelete}>
          <img alt="delete" src="delete_icon.png"></img>
        </a>
      </div>
    );
  }
  