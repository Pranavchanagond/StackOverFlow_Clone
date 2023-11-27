import React from "react";
import QuestionDetails from "./QuestionDetails";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import "../../App.css";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
