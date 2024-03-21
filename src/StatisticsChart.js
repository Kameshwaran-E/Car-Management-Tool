import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StatisticsChart = ({ stats }) => {
  const chartRef = useRef(null);
  let chart = null;

  useEffect(() => {
    if (stats) {
      const ctx = chartRef.current.getContext('2d');
      
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(stats),
          datasets: [{
            label: 'Car',
            data: Object.values(stats),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chart) {
        chart.destroy(); // Cleanup chart when component unmounts
      }
    };
  }, [stats]);

  return <canvas ref={chartRef} />;
};

export default StatisticsChart;
