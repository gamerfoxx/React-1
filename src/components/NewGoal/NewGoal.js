import React, {useState} from 'react';

import './NewGoal.css';

const NewGoal = (props) => {
  const [newGoalLvlEnteredText, setNewGoalLvlEnteredText] = useState('');
  const addGoalHandler = (event) =>{
    event.preventDefault();

    const lNewGoal = {
      id: Math.random().toString(),
      text: newGoalLvlEnteredText
    }

    props.onAddGoal(lNewGoal);
    setNewGoalLvlEnteredText('')
  }

  const textChangeHandler = (event) =>{
    setNewGoalLvlEnteredText(event.target.value);
  }

  return (
  <form className='new-goal' onSubmit={addGoalHandler} >
    <input type='text' value={newGoalLvlEnteredText} onChange={textChangeHandler}/>
    <button type='submit'>Add Goal</button>
  </form>
);
};

export default NewGoal;
