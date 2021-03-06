import React from "react";
import "./index.module.css";

const Navigator: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/series" className="nav-link">
                Séries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
