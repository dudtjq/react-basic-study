import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: '1월', value: 0 },
    { label: '2월', value: 0 },
    { label: '3월', value: 0 },
    { label: '4월', value: 0 },
    { label: '5월', value: 0 },
    { label: '6월', value: 0 },
    { label: '7월', value: 0 },
    { label: '8월', value: 0 },
    { label: '9월', value: 0 },
    { label: '10월', value: 0 },
    { label: '11월', value: 0 },
    { label: '12월', value: 0 },
  ];

  // 선택년도의 모든 지출 데이터를 꺼내서 월을 추출하면서
  // 해당 월의 지출총액을 chartDataPoints의 월 value에 누적
  expenses.forEach((exp) => {
    // 이 월 정표는 실제 월에서 1이 감소되어 있다.
    // 오히려 인덱스를 지목하기가 좋아짐
    const expenseMonth = exp.date.getMonth();
    const expensePrice = exp.price;

    chartDataPoints[expenseMonth].value += expensePrice;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
