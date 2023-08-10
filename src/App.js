import React from 'react';

import GoalList from './components/GoalList/GoalList';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const lCourseGoals = [
    {id: 'rg1', text: 'Solidify React Knowledge'},
    {id: 'rg2', text: 'Solidify React Native Knowledge'},
    {id: 'rg3', text: 'Obtain new role'}
  ]

  return (
    <div className="react-goals">
      <NewGoal/>
      <h2>React Goals</h2>
      <GoalList goals={lCourseGoals}/>
    </div>
  );
};

export default App;
