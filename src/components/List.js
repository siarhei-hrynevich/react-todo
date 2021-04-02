import React from 'react';
import Item from './Item'
import '../css/App.css';

export default function List({ items, onClick, onDelete }) {
    const elements = items.map((i, index) => 
      <Item key={i} item={i} onClick={() => onClick(index)} onDelete={() => onDelete(index)}/>
      );
    return (
      <div>
        {elements}
      </div>
    );
  }