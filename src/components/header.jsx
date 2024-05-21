import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.name : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.email : "Loading"}</p>
                <p>{props.data ? props.data.telephone : "Loading"}</p>
                <p>{props.data ? props.data.address : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
