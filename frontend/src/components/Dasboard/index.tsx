import React from "react";
import Header from "../Header";
import BaseCard from "../Card";
import Footer from "../Footer";
import ChartCanvas from "../ChartCanvas";
import LineChart from "../LineChart";

const Dashboard: React.FunctionComponent = () => {
  return (
    <div className="flex-col justify-center align-middle items-center px-10 py-10">
      <Header />
      <BaseCard />
      <BaseCard />
      <BaseCard outerheight="h-20" innerHeight="h-56" />
      <ChartCanvas />
      <Footer />
    </div>
  );
};

export default Dashboard;
