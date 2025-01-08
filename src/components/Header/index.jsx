import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiGlobe } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoGlobeSharp } from "react-icons/io5";
import "./index.css";

const Header = ({ headerData }) => {
  return (
    <div className="Header">
      <img src={headerData?.logo} width={100} alt="logo" />
      <span>{headerData?.links[0].name}</span>
      <div className="Inp-parent">
        <div className="child">
          <IoIosSearch className="svg-search" />
          <input type="text" placeholder="Search for anything" />
        </div>
      </div>
      <ul className="link-parent">
        {headerData?.links.slice(1).map((link, index) => {
          return <li key={index}>{link.name}</li>;
        })}
      </ul>
      <div className="user-options">
        <MdOutlineShoppingCart className="cartIcon" />
        {headerData?.userOptions?.map((opt, index) => {
          return (
            <button
              key={index}
              className="header-btn"
              style={{
                backgroundColor: index === 1 ? "#2d2f31" : "white",
                color: index === 1 ? "white" : "black",
              }}
            >
              {opt.name}
            </button>
          );
        })}
        <div className="globe">
          <IoGlobeSharp />
        </div>
      </div>
    </div>
  );
};

export default Header;
