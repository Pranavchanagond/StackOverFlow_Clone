import React from "react";

import Quetions from "./Quetions";
const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Quetions question={question} key={question.id} />
      ))}
    </>
  );
};

export default QuestionList;
