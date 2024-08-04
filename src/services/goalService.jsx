// src/services/goalService.js
export function addGoal(goal) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.push(goal);
  localStorage.setItem("goals", JSON.stringify(goals));
}

export function removeGoal(index) {
  const goals = JSON.parse(localStorage.getItem("goals")) || [];
  goals.splice(index, 1);
  localStorage.setItem("goals", JSON.stringify(goals));
}

export function getGoals() {
  return JSON.parse(localStorage.getItem("goals")) || [];
}
