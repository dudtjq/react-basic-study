import React from 'react';
import './CouresItem.css';

const CouresItem = ({ item, onDelete }) => {
  return (
    <li className="goal-item" onClick={() => onDelete(item.id)}>
      {item.text}
    </li>
  );
};

export default CouresItem;
