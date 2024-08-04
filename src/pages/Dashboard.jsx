// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import GoalForm from "../components/GoalForm";
import GoalList from "../components/GoalList";
// import ProgressChart from "../components/ProgressChart";
import { getGoals, addGoal, removeGoal } from "../services/goalService";

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setGoals(getGoals());
  }, []);

  const handleAddGoal = (goal) => {
    addGoal(goal);
    setGoals(getGoals());
  };

  const handleRemoveGoal = (index) => {
    removeGoal(index);
    setGoals(getGoals());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <WorkoutForm onAdd={(workout) => setWorkouts([...workouts, workout])} />
      <WorkoutList
        workouts={workouts}
        onRemove={(index) =>
          setWorkouts(workouts.filter((_, i) => i !== index))
        }
      />
      <GoalForm onAdd={handleAddGoal} />
      <GoalList goals={goals} onRemove={handleRemoveGoal} />
      {/* <ProgressChart workouts={workouts} /> */}
    </div>
  );
}

export default Dashboard;
