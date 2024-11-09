import React from 'react'
import ImgProject1 from '../../assets/img/flower-delivery.webp'
import ImgProject2 from '../../assets/img/pomodoro.webp'
import ImgProject3 from '../../assets/img/portfolio.webp'
import ImgProject4 from '../../assets/img/tutien-game.webp'
import ImgProject5 from '../../assets/img/flower-delivery.webp'
import ImgProject6 from '../../assets/img/weather-app.webp'
import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const SecondBlock = () => {

	const navigate = useNavigate()
	const images = [ImgProject1, ImgProject2, ImgProject3, ImgProject4, ImgProject5, ImgProject6];

	return (
		<div className="size-full flex flex-col space-y-2 justify-center items-center relative">
			<p className='flex text-sm items-center text-[#999999]'>
				<span className='mr-2 font-medium '>
					<BriefcaseBusiness className='text-blue-500' />
				</span>
				Projects</p>
			<p className='text-xl font-semibold text-[#e6e6e6]'>Work Gallerys</p>
			<div className="overflow-hidden w-full flex gap-4 mask-gradient">
				<motion.div
					className="flex flex-shrink-0 gap-4"
					initial={{ x: "-100%" }}
					animate={{ x: 0 }}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{[...images].map((item, index) => (
						<img
							src={item}
							key={index}
							loading='lazy'
							alt="Project image"
							className="h-36 object-cover rounded-lg border-2 border-stone-800 relative overflow-hidden before:absolute before:content-['image'] before:size-full before:bg-gray-500"
						/>
					))}
				</motion.div>
				<motion.div
					className="flex flex-shrink-0 gap-4"
					initial={{ x: "-100%" }}
					animate={{ x: 0 }}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: "linear",
					}}
				>
					{[...images].map((item, index) => (
						<img
							src={item}
							key={index}
							alt="Project image"
							loading='lazy'
							className="h-36 object-cover rounded-lg border-2 border-stone-800 relative overflow-hidden before:absolute before:content-['image'] before:size-full before:bg-gray-500"
						/>
					))}
				</motion.div>
			</div>
			<button type='button' onClick={() => {
				navigate('/project')
			}} className='hover:bg-blue-400 transition-all bg-blue-500 px-8 py-2 rounded-2xl font-medium border-4 border-stone-800 size-fit absolute -bottom-2 2xl:-bottom-1'>
				View Works
			</button>
		</div>
	)
}

export default SecondBlock