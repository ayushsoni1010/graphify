import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Divider from "../Divider";

const Header: React.FunctionComponent = () => {
  return (
    <header className="flex gap-4 flex-col">
      <div className="flex flex-row items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} className="w-40" alt="RealAssist.ai Logo" />
          </Link>
        </div>
        <p className="text-sm font-black">
          123 Main Street, Dover, NH 03820-4667
        </p>
      </div>
      <Divider />
    </header>
  );
};

export default Header;
