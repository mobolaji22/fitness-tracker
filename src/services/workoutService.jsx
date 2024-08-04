export function getWorkouts() {
  return JSON.parse(localStorage.getItem("workouts")) || [];
}

export function addWorkout(workout) {
  const workouts = getWorkouts();
  workouts.push(workout);
  localStorage.setItem("workouts", JSON.stringify(workouts));
}

export function removeWorkout(index) {
  const workouts = getWorkouts();
  workouts.splice(index, 1);
  localStorage.setItem("workouts", JSON.stringify(workouts));
}
