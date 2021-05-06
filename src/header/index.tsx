import React from "react";
import background from "../assets/logo.jpg";
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header
      className="masthead"
      // eslint-disable-next-line react/style-prop-object
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Douglas Mendes</h1>
              <span className="subheading">
                Bem Vindo! Vamos falar sobre tecnologia?
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
