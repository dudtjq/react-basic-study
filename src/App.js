import './App.css';
import React from 'react';
import CouresInput from './components/CouresGoals/CouresInput';
import CouresList from './components/CouresGoals/CouresList';

function App() {
  return (
    <div>
      <section id="goal-form">
        <CouresInput />
        <section id="goals">
          <CouresList />
        </section>
      </section>
    </div>
  );
}

export default App;
