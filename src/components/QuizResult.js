import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/QuizQuestion.css'


const QuizResult = ({ score, totalQuestions, correctAnswers, wrongAnswers }) => {

  return (
    <>
      <div className='quiz-page'>
        <div className='result-container'>
          <div className='result'>
            <h3 className='mt-3'>Result</h3>
            <p>Total Questions: <span>{totalQuestions}</span></p>
            <p>Total Score: <span>{score}</span></p>
            <p>Correct Answers: <span>{correctAnswers}</span></p>
            <p>Wrong Answers: <span>{wrongAnswers}</span></p>
            <Link to='/'>
              <button className='next-button'>Play Agian</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizResult
