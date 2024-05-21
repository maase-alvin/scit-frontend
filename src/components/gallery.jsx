import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="academicactivities" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Academic Activities</h2>
          <p>
          Discover a world of knowledge at our school! 
          Engage in dynamic academic activities, from hands-on science
          experiments to thought-provoking debates and creative writing workshops. 
          Our vibrant community fosters curiosity and excellence, 
          preparing students to excel in their future endeavors. 
          Join us in the pursuit of learning and discovery!
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
