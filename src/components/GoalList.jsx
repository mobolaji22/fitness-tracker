// src/components/GoalList.js
import React from "react";

function GoalList({ goals, onRemove }) {
  return (
    <ul className="goal-list">
      {goals.map((goal, index) => (
        <li key={index}>
          {goal}
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
