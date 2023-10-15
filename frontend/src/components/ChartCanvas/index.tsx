import location from "../../assets/location.svg";
import Divider from "../Divider";
import bg from "../../assets/bg.png";
import Button from "../Button";

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
          <div className="bg-[#F7F9FC] p-6 rounded-b-3xl">
            <div className="relative ">
              <p className="text-sm font-medium flex flex-row gap-10 z-10 -rotate-[90deg] absolute -left-9 top-16">
                Arrests
              </p>
              <div className="flex justify-center items-center bg-white rounded-3xl shadow-sm border relative">
                <img src={bg} alt="blur-background" className="w-screen h-40" />
                <div className="absolute">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCanvas;
