// src/components/WorkoutList.js
import React from "react";

function WorkoutList({ workouts, onRemove }) {
  return (
    <ul>
      {workouts.map((workout, index) => (
        <li key={index}>
          {workout.name} - {workout.calories} calories on{" "}
          {new Date(workout.date).toLocaleDateString()}
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default WorkoutList;
