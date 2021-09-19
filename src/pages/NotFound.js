import React from "react";

import "./styles/NotFound.css";
import platziconflogo from "../images/platziconf-logo.svg";

function NotFound() {
  return (
    <React.Fragment>
      <div className="NotFound__container">
        <div className="container">
          <div className="row NotFound__message">
            
              <img
                className="NotFound__conf-logo"
                src={platziconflogo}
                alt="Conf logo"
              />
              <h1>PAGE NOT FOUND!</h1>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
