import "./App.css";
import "./index.css";
import Navbar from "./layouts/Navbar";
import ParticleBackground from "./bgParticle/ParticleBackground";
import SideBar from "./layouts/SideBar";
import HomePage from "./Page/HomePage";
function App() {
	return (
		<>
			<ParticleBackground />
			<div className="flex justify-between items-center p-20">
				<SideBar></SideBar>
				<HomePage></HomePage>
				<Navbar></Navbar>
			</div>
		</>
	);
}

export default App;
