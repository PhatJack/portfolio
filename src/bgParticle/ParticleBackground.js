import Particles from "react-tsparticles";
import particleConfig from "../config/particle_config";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	return (
		<Particles
			params={particleConfig}
			init={particlesInit}
			loaded={particlesLoaded}
		></Particles>
	);
};

export default ParticleBackground;
