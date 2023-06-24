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
const App = () => {
	return (
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
	);
}
export default App;
