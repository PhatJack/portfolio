import "./index.css";
import Navbar from "./layouts/Navbar";
import ParticleBackground from "./bgParticle/ParticleBackground";
import SideBar from "./layouts/SideBar";
import HomePage from "./Page/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/AboutPage";
import EducationPage from "./Page/EducationPage";
import ContactPage from "./Page/ContactPage";
import ProjectPage from "./Page/ProjectPage";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<React.StrictMode>
			<HashRouter>
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
			</HashRouter>
		</React.StrictMode>
	);
};
export default App;
