import React, { useState, useEffect } from "react";
import '../styles/QuizQuestion.css'

const Timer = ({ initialTime = 60, onTimeUp, isQuizOver }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        if (timeLeft === 0) {
            if (onTimeUp) onTimeUp();
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line 
    }, [timeLeft,onTimeUp]);

    return (

        <div className="d-flex flex-column align-items-cente">

            <div className="time-display">
                Time Left: {timeLeft}'s
            </div>
        </div>
    )
};

export default Timer;
