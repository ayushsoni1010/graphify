import location from "../../assets/location.svg";
import Divider from "../Divider";
import LineChart from "../LineChart";

const ChartCanvas = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 mb-4 justify-center items-center">
        <div className="flex gap-1">
          <img src={location} className="w-7" alt="RealAssist.ai Logo" />
          <p className="font-medium text-lg">Crime</p>
        </div>
        <Divider />
      </div>
      <div className="my-6 rounded-3xl shadow-sm">
        <div className="flex flex-col">
          <div className="bg-[#E8EEFB] rounded-t-3xl h-14 relative">
            <p className="my-4 mx-6 text-sm font-medium text-[#1463FF]">
              Burglary
            </p>
          </div>
          <div className="bg-[#F7F9FC] pt-[0.3rem] pb-6 px-8 rounded-br-3xl rounded-bl-3xl">
            <div className="relative ">
              <p className="flex z-10 relative left-[-25px] origin-[0_0] -rotate-90 flex-row text-sm leading-5 font-medium top-40">
                Arrests
              </p>
              <div className=" bg-white rounded-3xl shadow-sm border h-64">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCanvas;
