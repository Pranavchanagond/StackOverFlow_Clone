import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./HomeMainBar.css";
import QuestionList from "./QuestionList";

const HomeMainBar = () => {
  const user = 1;
  const location = useLocation();
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert("Login or SignUp to ask question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  const questionsList = [
    {
      _id: 1,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "what is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "nodejs", "python", "reactjs", "mongodb"],
      userPosted: "Pranav",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Pranav",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "Pranav",
      userId: 1,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Pranav",
          answeredOn: "jan 2",
          userId: 2,
        },
      ],
    },
    {
      _id: 3,
      upVotes: 1,
      downVotes: 0,
      noOfAnswers: 0,
      questionTitle: "what is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "R", "python"],
      userPosted: "Pranav",
      userId: 2,
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Pranav",
          answeredOn: "jan 2",
          userId: 3,
        },
      ],
    },
  ];
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>
              {questionsList.length}
              questions
            </p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
