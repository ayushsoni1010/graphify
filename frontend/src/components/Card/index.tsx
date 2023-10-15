import bg from "../../assets/bg.png";
import Button from "../Button";

const BaseCard = ({
  outerheight,
  innerHeight,
}: {
  outerheight?: string;
  innerHeight?: string;
}) => {
  return (
    <div className="my-6 rounded-3xl shadow-sm">
      <div className="flex flex-col">
        <div
          className={`bg-[#E8EEFB] rounded-t-3xl ${outerheight ?? "h-14"}`}
        />
        <div className="bg-[#F7F9FC] p-6 rounded-b-3xl">
          <div className="flex justify-center items-center bg-white rounded-3xl shadow-sm border relative">
            <img
              src={bg}
              alt="blur-background"
              className={`w-screen ${innerHeight ?? "h-40"}`}
            />
            <div className="absolute">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseCard;
