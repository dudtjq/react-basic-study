import React from 'react';
import './CouresInput.css';
import Button from '../UI/Button/Button';

const CouresInput = () => {
  return (
    <form>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CouresInput;
