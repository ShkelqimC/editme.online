import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Graph = () => {
  const data = {
    labels: ["Images Uploaded", "Images Edited", "Total Users"],
    datasets: [
      {
        label: "Total of Data",
        data: [12, 19, 3],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
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
        text: "Editme Graph",
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 dark:bg-black">
      <div className="grid gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
