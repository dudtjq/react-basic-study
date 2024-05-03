import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, currentValue, totalValue }) => {
  let barFillHeight = '0%';

  // 해당년도에 지출한 내역이 있을 수 도 있기 때문에 if문 활용
  // 또 해당 내역에 나눗셈을 진행 하게 되면 인피니티 관련 에러가 나옴
  if (totalValue > 0) {
    const percentage = (currentValue / totalValue) * 100;
    barFillHeight = percentage + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
