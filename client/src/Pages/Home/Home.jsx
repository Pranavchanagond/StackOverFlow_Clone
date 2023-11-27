import React from "react";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import "./App.css";

const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <HomeContainer />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
