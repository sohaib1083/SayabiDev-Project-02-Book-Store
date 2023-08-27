import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Home.css";
import aboutImage from "../images/about.jpg";

export const Home = () => {
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
      <div className="row container">
        <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{ height: "91.5vh" }}>
          <h2 style={{ fontSize: "70px" }}>BOOK STORE FOR YOU</h2>
          <Link to="/books" className="viewBook my-3">View Books</Link>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center flex-column" style={{ height: "91.5vh", paddingLeft: "100px" }}>
          <img className="img-fluid homeimg" src={aboutImage} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default Home;
