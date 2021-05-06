import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Trabalhando com git de forma profissional
              </h2>
              <h3 className="post-subtitle">
                Comandos, fluxo de trabalho e boas praticas.
              </h3>
            </a>
            <p className="post-meta">
              5 minutos de leituras, 21/04/2021
            </p>
          </div>
          <hr />
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                I believe every human has a finite number of heartbeats. I don't
                intend to waste any of mine.
              </h2>
            </a>
            <p className="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on September 18, 2021
            </p>
          </div>
          <hr />
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">
                Science has not yet mastered prophecy
              </h2>
              <h3 className="post-subtitle">
                We predict too much for the next year and yet far too little for
                the next ten.
              </h3>
            </a>
            <p className="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on August 24, 2021
            </p>
          </div>
          <hr />
          <div className="post-preview">
            <a href="post.html">
              <h2 className="post-title">Failure is not an option</h2>
              <h3 className="post-subtitle">
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </h3>
            </a>
            <p className="post-meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on July 8, 2021
            </p>
          </div>
          <hr />

          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#!">
              Older Posts →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
