import React from 'react';
import './CouresList.css';
import CouresItem from './CouresItem';

const CouresList = ({ items, onDelete }) => {
  return (
    <ul className="goal-list">
      {items.map((item) => {
        return <CouresItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </ul>
  );
};

export default CouresList;
