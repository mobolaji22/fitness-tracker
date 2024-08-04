// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";
import GoalForm from "../components/GoalForm";
import GoalList from "../components/GoalList";
import ProgressChart from "../components/ProgressChart";
import {
  getGoals,
  addGoal,
  removeGoal,
  getWorkouts,
  addWorkout,
} from "../services/goalService";
import Tabs from "../components/Tabs";
import DateNavigation from "../components/DateNavigation";

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [view, setView] = useState("daily");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setGoals(getGoals());
    setWorkouts(getWorkouts());
  }, []);

  const handleAddGoal = (goal) => {
    addGoal(goal);
    setGoals(getGoals());
  };

  const handleRemoveGoal = (index) => {
    removeGoal(index);
    setGoals(getGoals());
  };

  const handleAddWorkout = (workout) => {
    addWorkout(workout);
    setWorkouts(getWorkouts());
  };

  const handleChangeView = (newView) => {
    setView(newView);
    setCurrentDate(new Date());
  };

  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    switch (view) {
      case "daily":
        newDate.setDate(newDate.getDate() + direction);
        break;
      case "weekly":
        newDate.setDate(newDate.getDate() + direction * 7);
        break;
      case "monthly":
        newDate.setMonth(newDate.getMonth() + direction);
        break;
      case "yearly":
        newDate.setFullYear(newDate.getFullYear() + direction);
        break;
      default:
        break;
    }
    setCurrentDate(newDate);
  };

  const getFilteredWorkouts = () => {
    return workouts.filter((workout) => {
      const workoutDate = new Date(workout.date);
      switch (view) {
        case "daily":
          return workoutDate.toDateString() === currentDate.toDateString();
        case "weekly":
          const startOfWeek = new Date(currentDate);
          startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 6);
          return workoutDate >= startOfWeek && workoutDate <= endOfWeek;
        case "monthly":
          return (
            workoutDate.getMonth() === currentDate.getMonth() &&
            workoutDate.getFullYear() === currentDate.getFullYear()
          );
        case "yearly":
          return workoutDate.getFullYear() === currentDate.getFullYear();
        default:
          return true;
      }
    });
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Tabs currentView={view} onChangeView={handleChangeView} />
      <DateNavigation currentDate={currentDate} onNavigate={navigateDate} />
      <WorkoutForm onAdd={handleAddWorkout} />
      <WorkoutList
        workouts={getFilteredWorkouts()}
        onRemove={(index) =>
          setWorkouts(workouts.filter((_, i) => i !== index))
        }
      />
      <GoalForm onAdd={handleAddGoal} />
      <GoalList goals={goals} onRemove={handleRemoveGoal} />
      <ProgressChart workouts={getFilteredWorkouts()} />
    </div>
  );
}

export default Dashboard;
