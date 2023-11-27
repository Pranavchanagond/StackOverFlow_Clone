import React from "react";
import { Link, useParams } from "react-router-dom";
import upvote from "../../assets/upvote.svg";
import downvote from "../../assets/downvote.svg";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";

const QuestionDetails = () => {
  const { id } = useParams();

  const questionsList = [
    {
      _id: "1",
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
      _id: "2",
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
      _id: "3",
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
    <div className="question-details-page">
      {questionsList === null ? (
        <h1>Loading....</h1>
      ) : (
        <>
          {questionsList
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                {console.log(question)}
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=""
                        width={18}
                        className="votes-icon"
                      />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img
                        src={downvote}
                        alt=""
                        width={18}
                        className="votes-icon"
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button">Share</button>
                          <button type="button">Delete</button>
                        </div>
                        <div>
                          <p>asked {question.askedOn}</p>
                          <Link
                            to={`/User/${question.userId}`}
                            className="user-link"
                            style={{ color: "#00068" }}
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              color="white"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            >
                              {question.userPosted}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} asnwers</h3>
                    <DisplayAnswer key={question._id} question={question} />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3> Your Answer</h3>
                  <form>
                    {" "}
                    <textarea
                      className="ans-inp"
                      cols="30"
                      rows="10"
                    ></textarea>{" "}
                    <br />
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post your answer"
                    />
                  </form>
                  <p>
                    Browse other Questions tagged
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" className="ans-tag" key={tag}>
                        {tag}
                      </Link>
                    ))}
                    or
                    <Link
                      to="/AskQuestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      <span> ask your own question.</span>
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionDetails;
