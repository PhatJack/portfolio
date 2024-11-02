import { AnimatePresence } from "framer-motion"
import Home from "./pages/Home"

function App() {

	return (
		<div className="2xl:w-screen 2xl:h-screen 2xl:max-h-screen bg-[#060606] sm:p-4 md:p-8 xl:p-10">
			<AnimatePresence mode="wait">
				<Home />
			</AnimatePresence>
		</div >
	)
}

export default App
