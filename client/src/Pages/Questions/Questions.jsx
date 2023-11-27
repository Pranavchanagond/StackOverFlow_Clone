import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import "../../App.css";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import HomeMainBar from "../../components/HomeMainBar/HomeMainBar";

const Questions = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <HomeMainBar />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Questions;
