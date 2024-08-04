// src/components/WorkoutForm.js
import React, { useState } from "react";
import { addWorkout } from "../services/workoutService";

function WorkoutForm({ onAdd }) {
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const workout = { type, duration, calories };
    addWorkout(workout);
    onAdd(workout);
    setType("");
    setDuration("");
    setCalories("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (min)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
}

export default WorkoutForm;
