import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"
import Project from "./pages/Project"
import { useRoutes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { cloneElement } from "react"

function App() {

	const location = useLocation()
	const elements = useRoutes([
		{
			path: "/",
			element: <Home />
		},
		{
			path: "/project",
			element: <Project />
		}
	])

	return (
		<div className="2xl:w-screen 2xl:h-screen 2xl:max-h-screen bg-[#060606] p-4 md:p-8 xl:p-10">
			<AnimatePresence mode="wait">
				{cloneElement(elements, { key: location.pathname })}
			</AnimatePresence>
		</div >
	)
}

export default App
