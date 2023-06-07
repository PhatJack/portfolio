import "./App.css";
import "./index.css";
import Navbar from "./layouts/Navbar";
import ParticleBackground from "./bgParticle/ParticleBackground";
import SideBar from "./layouts/SideBar";
function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar></Navbar>
      <SideBar></SideBar>
    </>
  );
}

export default App;
