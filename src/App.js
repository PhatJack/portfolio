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
			{/* <Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/about" element={<AboutPage />} />
				<Route exact path="/education" element={<EducationPage />} />
				<Route exact path="/project" element={<ProjectPage />} />
				<Route exact path="/contact" element={<ContactPage />} />
			</Routes> */}
			<Navbar></Navbar>
		</div>
	);
}
export default App;
