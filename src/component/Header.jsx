import React from "react";
import "./header.css";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  return (
    <div className="header">
      <p>Select services</p>
      <div className="cancel-btn">
        <RxCross1 size={25} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Header;
