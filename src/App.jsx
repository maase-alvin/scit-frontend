import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Programmes } from "./components/programmes";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { 
  fetchAcademicActivities,
  fetchProgrammes,
  fetchSchoolById,
 } from "./util/api";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [academicActivities, setAcademicActivities] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [school, setSchool] = useState({});
  useEffect(async () => {
    setLandingPageData(JsonData);
    try {
      const academics = await fetchAcademicActivities();
      const schoolProgrammes = await fetchProgrammes();
      const schoolDetail = await fetchSchoolById(1);
      setAcademicActivities(academics);
      setProgrammes(schoolProgrammes);
      setSchool(schoolDetail);
      console.log("Academics:", academics);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={school} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} />  */}
      <Gallery data={academicActivities} />
      <Programmes data={programmes} />
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />  */}
      <Contact data={school} />
    </div>
  );
};

export default App;
