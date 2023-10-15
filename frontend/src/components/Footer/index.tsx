import Divider from "../Divider";

const Footer = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const newDate = `${month} ${date.getDate()}, ${year}`;

  return (
    <footer className="flex gap-4 flex-col">
      <Divider />
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-black text-[#1463FF]">
          Report Generated on {newDate}
        </p>
        <p className="text-sm font-black">
          RealAssist Property report | Page 1{" "}
          <span className="text-slate-500 font-black">of 25</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
