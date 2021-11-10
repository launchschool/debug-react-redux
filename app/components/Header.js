import React from "react";

import { useSelector } from "react-redux";

import Logo from "../img/logo.svg";

import "./css/_Header.css";

const Header = () => {
  const votes = useSelector((state) => state.posts.votes);
  return (
    <div className="header">
      {/* eslint-disable-next-line */}
      <img src={Logo} alt="Canny" className="logo" />
      <div className="spacer" />
      <div>Total Votes: {votes}</div>
    </div>
  );
};

export default Header;
