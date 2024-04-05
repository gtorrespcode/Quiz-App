import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswer, setUserAnwser] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const QuizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnwser((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (QuizIsComplete) {
    return <Summary userAnswer={userAnswer}/>
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
