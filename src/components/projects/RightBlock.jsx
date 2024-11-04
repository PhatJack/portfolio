import { LandPlot } from 'lucide-react'
import { BatteryFull } from 'lucide-react'
import { Paintbrush } from 'lucide-react'
import { AudioLines } from 'lucide-react'
import { Binoculars } from 'lucide-react'
import { Hourglass } from 'lucide-react'
import { BrainCircuit } from 'lucide-react'
import { LibraryBig } from 'lucide-react'
import { SquareChartGantt } from 'lucide-react'
import { Star } from 'lucide-react'
import { Target } from 'lucide-react'
import { Smile } from 'lucide-react'
import { BookUser } from 'lucide-react'
import { Hand } from 'lucide-react'
import { ChartNoAxesCombined } from 'lucide-react'
import { BookOpenText } from 'lucide-react'
import { Lightbulb } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { Waypoints } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
const RightBlock = () => {

	const whyChooseMeLists = [
		{
			icon: <Sparkles className='text-[#ccc]' />,
			title: "Attention to Detail"
		},
		{
			icon: <Lightbulb className='text-[#ccc]' />,
			title: "Problem Solver"
		},
		{
			icon: <LandPlot className='text-[#ccc]' />,
			title: "Team Player"
		},
		{
			icon: <BatteryFull className='text-[#ccc]' />,
			title: "Passionate"
		},
		{
			icon: <AudioLines className='text-[#ccc]' />,
			title: "Good Communicator"
		},
		{
			icon: <Star className='text-[#ccc]' />,
			title: "Self Learning"
		},
		{
			icon: <Hand className='text-[#ccc]' />,
			title: "Willingness to learn"
		},
		{
			icon: <SquareChartGantt className='text-[#ccc]' />,
			title: "Delegation"
		},
		{
			icon: <Binoculars className='text-[#ccc]' />,
			title: "Searching"
		}
	]

	const WhyChooseMeListsTwo = [
		{
			icon: <LibraryBig className='text-[#ccc]' />,
			title: "Continuous Learner"
		},
		{
			icon: <Paintbrush className='text-[#ccc]' />,
			title: "Creative Mind"
		},
		{
			icon: <Smile className='text-[#ccc]' />,
			title: "Positive Attitude"
		},
		{
			icon: <BrainCircuit className='text-[#ccc]' />,
			title: "Critical Thinking"
		},
		{
			icon: <Hourglass className='text-[#ccc]' />,
			title: "Time management"
		},
		{
			icon: <BookUser className='text-[#ccc]' />,
			title: "Organization"
		},
		{
			icon: <BookOpenText className='text-[#ccc]' />,
			title: "Growth Mindset"
		},
		{
			icon: <Target className='text-[#ccc]' />,
			title: "Dedicated and Productive"
		},
		{
			icon: <ChartNoAxesCombined className='text-[#ccc]' />,
			title: "Adaptability",
		}
	]

	return (
		<div className='size-full flex flex-col space-y-2 justify-center items-center overflow-hidden'>
			<div className="flex flex-col items-center space-y-1 px-4 pt-4">
				<p className='flex items-center text-[#999999] text-sm'>
					<span className='mr-2 font-medium'>
						<Waypoints className='text-blue-500' />
					</span>
					Why me</p>
				<p className='text-xl font-semibold text-[#e6e6e6]'>Why to choose me</p>
			</div>
			<div className="w-full h-px bg-[#252525] relative">
			</div>
			<div className="w-full flex flex-col space-y-4 p-4 mask-gradient overflow-hidden">
				<div className="w-full flex gap-2">
					<motion.div
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear",
						}}
						className="flex flex-shrink-0 space-x-2">
						{
							whyChooseMeLists.map((item, index) => (
								<div key={index} className="w-full flex items-center space-x-2 bg-[#191919] p-2 rounded-xl">
									<div className="flex items-center justify-center size-10 p-1 rounded-lg bg-[#252525]">
										{item.icon}
									</div>
									<p className="text-sm whitespace-nowrap text-[#ccc] font-medium">{item.title}</p>
								</div>
							))
						}
					</motion.div>
					<motion.div
						initial={{ x: "-100%" }}
						animate={{ x: 0 }}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear",
						}}
						className="flex flex-shrink-0 space-x-2">
						{
							whyChooseMeLists.map((item, index) => (
								<div key={index} className="w-full flex items-center space-x-2 bg-[#191919] p-2 rounded-xl">
									<div className="flex items-center justify-center size-10 p-1 rounded-lg bg-[#252525]">
										{item.icon}
									</div>
									<p className="text-sm whitespace-nowrap text-[#ccc] font-medium">{item.title}</p>
								</div>
							))
						}
					</motion.div>
				</div>
				<div className="flex gap-2">
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: "-100%" }}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear",
						}}
						className="flex flex-shrink-0 space-x-2">
						{
							WhyChooseMeListsTwo.map((item, index) => (
								<div key={index} className="w-full flex items-center space-x-2 bg-[#191919] p-2 rounded-xl">
									<div className="flex items-center justify-center size-10 p-1 rounded-lg bg-[#252525]">
										{item.icon}
									</div>
									<p className="text-sm whitespace-nowrap text-[#ccc]">{item.title}</p>
								</div>
							))
						}
					</motion.div>
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: "-100%" }}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear",
						}}
						className="flex flex-shrink-0 space-x-2">
						{
							WhyChooseMeListsTwo.map((item, index) => (
								<div key={index} className="w-full flex items-center space-x-2 bg-[#191919] p-2 rounded-xl">
									<div className="flex items-center justify-center size-10 p-1 rounded-lg bg-[#252525]">
										{item.icon}
									</div>
									<p className="text-sm whitespace-nowrap text-[#ccc]">{item.title}</p>
								</div>
							))
						}
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default RightBlock