import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswer }) => {
  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz complete Image" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrect</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
