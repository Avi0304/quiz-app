import React, { useState } from 'react';
import '../styles/QuizQuestion.css';

const QuizQuestion = ({ question, OnAnswer, questionIndex, totalQuestions, onNext }) => {
  const [selectOption, setSelectOption] = useState(null);
  const [answer, setAnswer] = useState(false);

  if (!question) {
    return <h2>Loading question...</h2>;
  }

  // Handle answer selection
  const handleAnswer = (isCorrect, index) => {
    setSelectOption(index);
    setAnswer(true);
    OnAnswer(isCorrect);
  };

  // Handle Next Question
  const handleNext = () => {
    setAnswer(false);
    setSelectOption(null);
    onNext();
  };

  return (
    <div className='quiz-page'>
      <div className="quiz-container">
        {/* Display the current question number based on questionIndex */}
        <div className="active-question-no">Question {questionIndex + 1}</div>
        <div className="total-question" style={{color: 'grey'}}>Total Questions: {totalQuestions}</div>

        <h2>{question.description}</h2>

        <div className="options">
          {question.options.map((option, index) => {

            const buttonStyle = {
              backgroundColor: option.is_correct && index === selectOption ? 'green' : (index === selectOption ? 'red' : 'transparent'),
              color: 'white',
              border: option.is_correct && index === selectOption ? '2px solid darkgreen' : (index === selectOption ? '2px solid darkred' : '2px solid #ccc')
            };
            return (
              <div className="d-flex aligns-items-center justify-content-center" key={index}>
                <button
                  onClick={() => handleAnswer(option.is_correct, index)} // Handle click for each option
                  style={buttonStyle}
                >
                  {option.description}
                </button>
              </div>
            );
          })}

        </div>

        {answer && (
          <div className="d-flex justify-content-end">
            <button className="next-button" onClick={handleNext}>
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
