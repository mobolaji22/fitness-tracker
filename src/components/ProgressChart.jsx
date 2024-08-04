// src/components/ProgressChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function ProgressChart({ workouts }) {
  const data = {
    labels: workouts.map((_, index) => `Workout ${index + 1}`),
    datasets: [
      {
        label: "Calories Burned",
        data: workouts.map((workout) => workout.calories),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  return <Line data={data} />;
}

export default ProgressChart;
