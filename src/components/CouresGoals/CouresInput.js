import React, { useState } from 'react';
import './CouresInput.css';
import Button from '../UI/Button/Button';

const CouresInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');
  // 입력값 검증 상태 변수
  const [isVaild, setIsVaild] = useState(true);

  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsVaild(isVaild);
    }
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsVaild(false);
      return;
    }

    onAdd(enteredText);
    setEnteredText('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input
          style={{
            background: isVaild ? 'transparent' : 'salmon',
            borderColor: isVaild ? 'black' : 'red',
          }}
          type="text"
          onChange={textChangeHandler}
          value={enteredText}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CouresInput;
