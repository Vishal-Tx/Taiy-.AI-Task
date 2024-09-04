import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
    historicalData: {
        cases: Record<string, number>;
        deaths: Record<string, number>;
        recovered: Record<string, number>;
    };
}

const LineChart: React.FC<LineChartProps> = ({ historicalData }) => {
    const dates = Object.keys(historicalData.cases); // Get dates from the cases data
    const cases = Object.values(historicalData.cases); // Get case numbers
    const deaths = Object.values(historicalData.deaths); // Get death numbers
    const recovered = Object.values(historicalData.recovered); // Get recovery numbers

    // Define data for the chart
    const data = {
        labels: dates,
        datasets: [
            {
                label: "Cases",
                data: cases,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
            {
                label: "Deaths",
                data: deaths,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
            },
            {
                label: "Recovered",
                data: recovered,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                fill: true,
            },
        ],
    };

    // Define chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "COVID-19 Cases Over Time",
            },
        },
    };

    return (
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-4">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
