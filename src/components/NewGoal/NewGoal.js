import React from 'react';

import './NewGoal.css';

const NewGoal = (props) => {
  const addGoalHandler = (event) =>{
    event.preventDefault();

    const lNewGoal = {
      id: Math.random().toString(),
      text: 'new goal'
    }
  }

  return (
<form className='new-goal' onSubmit={addGoalHandler} >
  <input type='text' />
  <button type='submit'>Add Goal</button>
</form>
);
};

export default NewGoal;
