import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
const TwelveBlock = () => {

	const [isDarkMode, setIsDarkMode] = useState(true)
	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
		// if (isDarkMode) {
		// 	document.body.classList.add('dark')
		// } else {
		// 	document.body.classList.remove('dark')
		// }
	}

	return (
		<div className="size-full flex justify-center items-center relative">
			<button onClick={handleDarkMode} type='button' className='uppercase text-xl font-bold tracking-wide text-[#ccc] whitespace-nowrap'>{isDarkMode ? "dark " : "light "}mode</button>
		</div>
	)
}

export default TwelveBlock