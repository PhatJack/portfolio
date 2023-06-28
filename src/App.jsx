import "./index.css";
import Navbar from "./layouts/Navbar";
import ParticleBackground from "./bgParticle/ParticleBackground";
import SideBar from "./layouts/SideBar";
import HomePage from "./Page/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/AboutPage";
import EducationPage from "./Page/EducationPage";
import ContactPage from "./Page/ContactPage";
import ProjectPage from "./Page/ProjectPage";
import React from "react";
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative">
                <ParticleBackground />
                <SideBar></SideBar>
                <HomePage />
                <AboutPage />
                <EducationPage />
                <ProjectPage />
                <ContactPage />
                <Navbar></Navbar>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default App;
