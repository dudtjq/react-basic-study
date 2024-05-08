import React from 'react';
import styles from './MealItemForm.module.scss';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="수량"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          stop: '1',
          defaultValue: '1',
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
