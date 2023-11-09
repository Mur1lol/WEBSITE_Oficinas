import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Grafico.css";

// Register the chart.js plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Chart.js options
export const options = {
  scales: {
    y: {
      // suggestedMin: 0,
      display: false,
      // suggestedMax: 40,
      color: "#fff",
    },
    x: {
      // display: false,
      border: {
        display: false,
        width: 10,
      },
      grid: {
        display: true,
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "#fff",
        // display: false,
        font: {
          family: '"Fira Sans", sans-serif',
          weight: 600,
          size: 15,
        },
      },
    },
  },
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleFont: {
        family: '"Fira Sans", sans-serif',
        size: 15,
      },
      bodyFont: {
        family: '"Fira Sans", sans-serif',
        size: 15,
      },
      padding: 20,
      caretSize: 10,
      displayColors: false,
    },
    legend: {
      display: true,
      position: "bottom",
      title: {
        display: false,
        text: "Yes",
        color: "#000",
      },
      strokeStyle: "#000",
      labels: {
        color: "#fff",
        padding: 20,
        font: {
          family: '"Fira Sans", sans-serif',
          weight: 600,
          size: 25,
        },
        pointStyle: "line",
        usePointStyle: true,
        pointStyleWidth: 0.001,
      },
    },
    title: {
      display: false,
      text: "Weather Chart",
    },
  },
};

// Chart.js labels
const labelss = [
  "00:00",
  "03:00",
  "06:00",
  "09:00"
];

const Grafico = (data) => {

  const temperatura = [];
  const labels = [];

  data = data.data;

  for(let i=0; i<data.length; i++) {
    temperatura.push(data[i]?.temperatura);
    labels.push(data[i]?.hora);
  }

  console.log(labels);

  const newData = {
    labels,
    datasets: [
      {
        fill: true,
        tension: 0.35,
        label: "Temperature (°C) ",
        data: temperatura,
        borderColor: "rgba(73, 133, 224, 1)",
        backgroundColor: "rgba(73, 133, 224, 0.5)",
        borderWidth: 5,
        // stepped: true,
        radius: 3,
        hoverRadius: 10,
        hitRadius: 100,
        pointStyle: "circle",
        color: "#fff",
      },
    ],
  };

  return (
    <div className="temp-chart">
      <Line options={options} data={newData} />
    </div>
  );
};

export default Grafico;
