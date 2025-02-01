import React from 'react';
import { Link } from 'react-router-dom';
import quizImg from '../assets/quiz-img.webp'
import Navbar from '../components/NavBar';

const Home = () => {
    return (

        <>
            <Navbar/>
            <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content-center text-center text-white w-100" style={{ backgroundColor: 'black' }}>
                <h1 className="display-4 fw-bold mb-4 text-white">Test Your Knowledge!</h1>
                <p className="fs-5 mb-4 ">
                    Challenge yourself with fun quizzes on various topics.
                </p>
                <Link to="/quiz" className="btn btn-warning px-4 py-2 fw-semibold shadow-sm">
                    Start Quiz
                </Link>
                <img
                    src={quizImg}
                    alt="Quiz"
                    className="mt-4 rounded shadow"
                />
            </div>
        </>

    );
};

export default Home;
