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

const options = {
  indexAxis: "x",
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Burglary",
      fontSize: 20,
      fontColor: "#1463FF",
    },
  },
};

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
        console.log(response);
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
    <div className="w-full">
      {!loading && data.labels ? (
        <Line
          height={50}
          data={data}
          options={{
            layout: {
              padding: 30,
            },
            responsive: true,
            scales: {
              x: {
                display: false,
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
        <p>loading</p>
      )}
    </div>
  );
};

export default LineChart;
