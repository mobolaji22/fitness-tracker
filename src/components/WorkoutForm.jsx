// src/components/WorkoutForm.js
import React, { useState } from "react";

function WorkoutForm({ onAdd }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && calories.trim() && date.trim()) {
      onAdd({ name, calories: Number(calories), date });
      setName("");
      setCalories("");
      setDate("");
    }
  };

  return (
    <div className="workout-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Workout Name"
          required
        />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Calories Burned"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default WorkoutForm;
