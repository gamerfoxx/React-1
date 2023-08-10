import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const lCourseGoals = [
    {id: 'rg1', text: 'Solidify React Knowledge'},
    {id: 'rg2', text: 'Solidify React Native Knowledge'},
    {id: 'rg3', text: 'Obtain new role'}
  ]

  return (
    <div className="react-goals">
      <h2>React Goals</h2>
      <GoalList goals={lCourseGoals}/>
    </div>
  );
};

export default App;
