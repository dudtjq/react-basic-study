import './App.css';
import React from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const $h2 = <h2>반가워요~~~</h2>;

  //지출 항목 객체 배열

  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      id: 3,
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
    {
      id: 4,
      title: '엽기떡볶이',
      price: 18000,
      date: new Date(2024, 5 - 1, 2),
    },
    {
      id: 5,
      title: '봉구스 밥버거',
      price: 6000,
      date: new Date(2022, 8 - 1, 5),
    },
    {
      id: 6,
      title: '피자헛',
      price: 17000,
      date: new Date(2021, 11 - 1, 9),
    },
    {
      id: 7,
      title: '롯데리아',
      price: 11000,
      date: new Date(2020, 12 - 1, 12),
    },
  ];

  // ExpenseForm 에게 내려보낼 함수
  const addExpenseHandler = (NewExpense) => {
    console.log('App 컴포넌트에서 응답함');
    console.log('newExpense : ', NewExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
