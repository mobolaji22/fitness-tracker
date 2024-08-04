// src/components/WorkoutList.js
import React from "react";
// import { removeWorkout } from "../services/workoutService";

function WorkoutList({ workouts, onRemove }) {
  return (
    <ul>
      {workouts.map((workout, index) => (
        <li key={index}>
          {workout.type} - {workout.duration} mins - {workout.calories} calories
          <button onClick={() => onRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default WorkoutList;
