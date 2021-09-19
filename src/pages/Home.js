import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";
import platziconflogo from "../images/platziconf-logo.svg";

function Home() {
  return (
    <React.Fragment>
      <div className="Home__container">
        <div className="container">
          <div className="row Home__newBadge">
            <div className="col-4">
              <img
                className="Home__conf-logo"
                src={platziconflogo}
                alt="Conf logo"
              />
              <h1>PRINT YOUR BADGES</h1>
              <p>The easiest way to manage your conference</p>
              <div className="Home__btn-link">
                <Link to="/badges" className="btn btn-primary">
                  Start now
                </Link>
              </div>
            </div>
            <div className="col-8">
              <img src={astronauts} alt="Conf logo" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
