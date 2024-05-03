import React from 'react';
//import './CouresList.css';
import CouresItem from './CouresItem';
import styled from 'styled-components';

const CouresUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CouresList = ({ items, onDelete }) => {
  return (
    <CouresUl>
      {items.map((item) => {
        return <CouresItem key={item.id} item={item} onDelete={onDelete} />;
      })}
    </CouresUl>
  );
};

export default CouresList;
