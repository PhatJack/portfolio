import "./index.css";
import Navbar from "./layouts/Navbar";
import ParticleBackground from "./bgParticle/ParticleBackground";
import SideBar from "./layouts/SideBar";
import HomePage from "./Page/HomePage";
function App() {
	return (
		<div className="relative">
			<ParticleBackground />
			<SideBar></SideBar>
			<HomePage></HomePage>
			<Navbar></Navbar>
		</div>
	);
}
export default App;
