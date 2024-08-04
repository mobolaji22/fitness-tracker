// src/components/GoalForm.js
import React, { useState } from "react";

function GoalForm({ onAdd }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goal.trim()) {
      onAdd(goal);
      setGoal("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="New goal"
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
