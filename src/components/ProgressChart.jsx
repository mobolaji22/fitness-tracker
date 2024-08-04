// src/components/ProgressChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ProgressChart({ workouts }) {
  const data = {
    labels: workouts.map((_, index) => `Workout ${index + 1}`),
    datasets: [
      {
        label: "Calories Burned",
        data: workouts.map((workout) => workout.calories),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Workout Progress",
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default ProgressChart;
