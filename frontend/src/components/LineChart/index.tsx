import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
);

const LineChart = (chartData: any) => {
  const apiEndPoint =
    "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";

  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const label: string = "Burglary";
    const labels: string[] = [];
    const datasetsData: number[] = [];

    axios
      .get(apiEndPoint)
      .then((response) => {
        setLoading(true);
        response?.data?.data.forEach((item: any, index: number) => {
          labels.push(item?.data_year);
          datasetsData.push(item[label]);
        });
        setData({
          labels: labels,
          datasets: [
            {
              label: label,
              data: datasetsData,
              borderColor: "#1463FF",
              borderDash: [],
              borderDashOffset: 0.0,
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "#1463FF",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
            },
          ],
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full items-center">
      {!loading && data.labels ? (
        <Line
          height={75}
          data={data}
          options={{
            layout: {
              padding: 30,
            },
            responsive: true,
            scales: {
              x: {
                display: true,
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
            },
          }}
        />
      ) : (
        <p className="text-center font-bold text-lg justify-center relative top-28">
          loading...
        </p>
      )}
    </div>
  );
};

export default LineChart;
