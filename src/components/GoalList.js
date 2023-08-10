import React from 'react';

import './GoalList.css';

const GoalList = (props) => {
  return (
    <ul className="goal-list">{
      props.goals.map(element =>{
        return <li key={element.id}>{element.text}</li>
      })
    }
    </ul>
  );
};

export default GoalList;
