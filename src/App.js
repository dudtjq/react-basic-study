import './App.css';
import React, { useState } from 'react';
import CouresInput from './components/CouresGoals/CouresInput';
import CouresList from './components/CouresGoals/CouresList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리엑트 컴포넌트 마스터 하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 삽고수 되기',
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  // Input 에게 전달할 함수
  const addGoalHandler = (text) => {
    console.log('전달 받은 텍스트 : ', text);
    const newGoal = {
      id: Math.random().toString(),
      text,
    };

    // 상태변수(배열) 수정
    //setGoals([...goals, newGoal]);
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  // 삭제 이벤트 핸들러를 CouresItem까지 내려 보내야함
  const deleteGoalHandler = (id) => {
    // console.log('전달된 id :', id);
    // const updateGoals = [...goals]; // 상태 배열 그대로 복사해서 가져옴
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals.splice(index, 1);
    // setGoals(updateGoals);

    // const updateGoals = goals.filter((goal) => goal.id !== id);
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // CouresList 조건부 렌더링
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '2em',
        textAlign: 'center',
      }}
    >
      목표를 등록해 주세요.
    </p>
  );

  if (goals.length > 0) {
    listContent = <CouresList items={goals} onDelete={deleteGoalHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <CouresInput onAdd={addGoalHandler} />
        <section id="goals">{listContent}</section>
      </section>
    </div>
  );
};

export default App;
