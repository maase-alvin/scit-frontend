import { Image } from "./image";
import React from "react";

export const Programmes = (props) => {
  return (
    <div id="programmes" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Programmes</h2>
          <p>
          Explore our diverse range of programs designed to 
          inspire and educate. From STEM and arts to humanities 
          and sports, our school offers enriching opportunities 
          for every student. Join us to discover your passions, 
          develop your skills, and achieve academic excellence in 
          a supportive and dynamic learning environment.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.name}
                      largeImage={d.image}
                      smallImage={d.image}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
