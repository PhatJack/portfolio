import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Project from "./pages/Project"

function App() {

	return (
		<div className="2xl:w-screen 2xl:h-screen 2xl:max-h-screen bg-[#060606] p-4 md:p-8 xl:p-10">
			<AnimatePresence mode="wait">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project" element={<Project />} />
				</Routes>
			</AnimatePresence>
		</div >
	)
}

export default App
