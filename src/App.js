import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import './App.css';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [appLvlGoals, setAppLvlGoals] = useState([
    {id: 'rg1', text: 'Solidify React Knowledge'},
    {id: 'rg2', text: 'Solidify React Native Knowledge'},
    {id: 'rg3', text: 'Obtain new role'}
  ]);

  const addNewGoalHandler = (newGoal) =>{
    // setAppLvlGoals(appLvlGoals.concat(newGoal))
    setAppLvlGoals((prevGoals) =>{
      return prevGoals.concat(newGoal)
    })
  }
  

  return (
    <div className="react-goals">
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <h2>React Goals</h2>
      <GoalList goals={appLvlGoals}/>
    </div>
  );
};

export default App;
