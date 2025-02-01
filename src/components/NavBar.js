import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{marginLeft: '5px'}}>Quiz App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{marginRight: '5px'}}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/quiz">Quizzes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{props.children}</div>
    </>
  );
}

export default Navbar;
