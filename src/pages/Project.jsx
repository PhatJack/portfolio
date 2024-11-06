import MiddleBlock from '@/components/projects/MiddleBlock'
import RightBlock from '@/components/projects/RightBlock'
import { BriefcaseBusiness, CalendarArrowUp, Ribbon, Rabbit, ShieldCheck, AlarmClock, HandCoins } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useIsPresent } from 'framer-motion'
import LeftBlock from '@/components/projects/LeftBlock'
const Project = () => {

	const isPresentProject = useIsPresent()

	const benefits = [
		{
			icon: <Rabbit className='text-[#ccc]' />,
			title: "Speed Delivery",
		},
		{
			icon: <ShieldCheck className='text-[#ccc]' />,
			title: "Quality Code",
		},
		{
			icon: <AlarmClock className='text-[#ccc]' />,
			title: "24/7 Support"
		},
		{
			icon: <HandCoins className='text-[#ccc]' />,
			title: "Free Consultation"
		}
	]

	console.log("Project display: " + isPresentProject)

	return (
		<div className="size-full flex lg:flex-row flex-col gap-4">

			<motion.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
					delay: 0.5
				}}
				className="lg:w-1/5 w-full h-full rounded-3xl flex flex-col gap-4">
				<LeftBlock />
			</motion.div>
			<motion.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
					delay: 0.75
				}}
				className="lg:w-3/5 w-full rounded-3xl h-full flex flex-col gap-4">
				<MiddleBlock />
				<div className="size-full rounded-3xl border bg-[#101010] border-[#252525] p-4 flex justify-center items-center text-[#ccc] font-semibold">
					Can someone help me to design this section? {':)))))'}
				</div>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0
				}}
				animate={{
					opacity: 1
				}}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
					delay: 1
				}}
				className="lg:w-1/5 w-full h-full flex flex-col space-y-4">
				<div className="rounded-3xl border bg-[#101010] border-[#252525] w-full flex flex-col gap-2 justify-center items-center p-4">
					<div className='w-fit h-10 relative size-8 bg-[#1f1f1f] flex items-center rounded-full'>
						<span className='absolute left-4 size-3 bg-green-500 rounded-full animate-pulse-custom' />
						<p className='ml-10 mr-4 font-semibold text-[#999] whitespace-nowrap'>Available to work</p>
					</div>
					<div className="w-full rounded-full bg-[#141414] flex gap-2 justify-center items-center py-2.5 text-lg text-[#999] font-medium">
						<BriefcaseBusiness stroke='#999' />
						Freelancing
					</div>
					<Link
						to={"https://forms.gle/wnwHa79wRbHwSi5"}
						target={'_blank'}
						className="flex justify-center items-center py-3 w-full space-x-2 rounded-xl
                hover:animate-border bg-custom-gradient-button border border-[#1f1f1f] hover:border-transparent transition-all">
						<CalendarArrowUp className="text-blue-500" />
						<span className="text-lg font-semibold text-zinc-400">Schedule me</span>
					</Link>
				</div>
				<div className="w-full rounded-3xl border bg-[#101010] border-[#252525]">
					<RightBlock />
				</div>
				<div className="rounded-3xl border bg-[#101010] border-[#252525] w-full h-full flex flex-col gap-4 justify-center items-center">
					<div className="flex flex-col items-center space-y-1 px-4 pt-4">
						<p className='flex items-center text-[#999999] text-sm'>
							<span className='mr-2 font-medium'>
								<Ribbon className='text-blue-500' />
							</span>
							Benefits</p>
						<p className='text-xl font-semibold text-[#e6e6e6]'>Service Benefits</p>
					</div>
					<div className="w-full h-px bg-[#252525] relative">
					</div>
					<div className="w-full h-full flex flex-col gap-2 px-4 pb-4">
						{
							benefits.map((item, index) => (
								<div key={index} className="w-full flex items-center space-x-2 bg-[#191919] p-2 rounded-xl">
									<div className="flex items-center justify-center size-10 p-1 rounded-lg bg-[#252525]">
										{item.icon}
									</div>
									<p className="text-sm whitespace-nowrap text-[#ccc] font-medium">{item.title}</p>
								</div>
							))
						}
					</div>
				</div>
			</motion.div>

			{/* Transition Background */}
			<motion.div
				initial={{ scaleX: 1 }}
				animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
				exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
				style={{ originX: isPresentProject ? 0 : 1 }}
				className="fixed inset-0 bg-blue-500 z-50"></motion.div>
		</div>
	)
}

export default Project