import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import { Link } from "react-router-dom";
import "./Questions.css";

const DisplayAnswer = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-action-user">
            <div>
              <button type="button">Share</button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered {ans.answeredOn}</p>
              <Link
                to={`/User/${question.userId}`}
                className="user-link"
                style={{ color: "#00068" }}
              >
                <Avatar backgroundColor="green" px="8px" py="5px" color="white">
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {ans.userAnswered}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
