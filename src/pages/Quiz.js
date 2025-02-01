import React, { useEffect, useState } from 'react';
import { fetchQuizData } from '../api';
import QuizResult from '../components/QuizResult';
import QuizQuestion from '../components/QuizQuestion';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import '../style.css';


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestions, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function loadData() {
      const data = await fetchQuizData();
      if (data.questions && data.questions.length > 0) {
        setQuestions(data.questions);
      }
      setLoading(false); // Stop loading after fetching questions
    }
    loadData();
  }, []);

  const handleNext = () => {
    if (currentQuestions < questions.length - 1) {
      setCurrentQuestion(currentQuestions + 1);
    } else {
      setQuizOver(true);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
      setCorrectAnswer(correctAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
  };

  const handleTimeUp = () => {
    setQuizOver(true); 
  };

  // Show Spinner while loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        {quizOver ? (
          <QuizResult score={score} totalQuestions={questions.length} correctAnswers={correctAnswer} wrongAnswers={wrongAnswer} />
        ) : (
          <>
            <Timer initialTime={60} onTimeUp={handleTimeUp} isQuizOver={quizOver} />
            <ProgressBar progress={(currentQuestions / questions.length) * 100} />
            <QuizQuestion
              question={questions[currentQuestions]}
              questionIndex={currentQuestions}
              totalQuestions={questions.length}
              OnAnswer={handleAnswer}
              onNext={handleNext}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
