import FirstBlock from '../components/block/FirstBlock'
import SecondBlock from '../components/block/SecondBlock';
import EighthBlock from '../components/block/EighthBlock';
import FourthBlock from '../components/block/FourthBlock';
import SeventhBlock from '../components/block/SeventhBlock';
import EleventhBlock from '../components/block/EleventhBlock';
import FifthBlock from '../components/block/FifthBlock';
import TenthBlock from '../components/block/TenthBlock';
import SixthBlock from '../components/block/SixthBlock';
import NinethBlock from '../components/block/NinethBlock';
import TwelveBlock from '../components/block/TwelveBlock';
import ThirdBlock from '../components/block/ThirdBlock';
import { motion } from 'framer-motion'
import { useIsPresent } from 'framer-motion';


const Home = () => {

	const isPresent = useIsPresent()

	return (
		<div className="w-full 2xl:h-full flex flex-col md:grid md:grid-cols-6 grid-rows-20 md:grid-rows-16 lg:grid-cols-9 lg:grid-rows-10 2xl:grid-rows-9 gap-4">
			{/* Transition Background */}
			<motion.div
				initial={{ scaleX: 1 }}
				animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
				exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
				style={{ originX: isPresent ? 0 : 1 }}
				className="fixed inset-0 bg-blue-500 z-50"></motion.div>
			
			{/* My Stack */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "circIn", delay: 0.5 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:col-span-3 2xl:col-span-2 md:row-span-2 2xl:row-span-3 col-start-1 row-start-1 p-4 flex justify-center items-center">
				{/* 1 */}
				<FirstBlock />
			</motion.div>

			{/* Work Gallery */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 0.75 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:row-span-2 2xl:row-span-3 md:col-span-3 2xl:col-span-2 md:col-start-4 lg:col-start-1 md:row-start-1 lg:row-start-3 2xl:row-start-4 p-4 flex justify-center items-center">
				{/* 2 */}
				<SecondBlock />
			</motion.div>

			{/* Achievements */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:col-span-3 2xl:col-span-2 md:row-span-2 2xl:row-span-3 md:col-start-1 md:row-start-7 lg:row-start-5 2xl:row-start-7 flex justify-center items-center">
				<ThirdBlock />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 1.25 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:row-start-3 lg:row-start-1 lg:col-start-4 2xl:col-start-3 row-span-4 lg:row-span-6 md:col-span-6 2xl:col-span-4 p-4 flex justify-center items-center">
				{/* Brief Information */}
				<FourthBlock />
			</motion.div>

			{/* My Team */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 1.5 }}
				className="md:block hidden bg-[#161616] border border-[#252525] rounded-3xl md:row-start-7 lg:row-start-9 2xl:row-start-7 md:row-span-2 lg:col-start-5 2xl:col-start-3 md:col-span-3 lg:col-span-2 2xl:col-span-1 p-4">
				<FifthBlock />
			</motion.div>

			{/* Github's Contribution */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 1.75 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:row-start-9 lg:row-start-7 md:row-span-2 2xl:row-span-3 md:col-span-6 2xl:col-span-4 p-4">
				<SixthBlock />
			</motion.div>

			{/* Year Expertise */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 2 }}
				className="md:block hidden bg-[#161616] border border-[#252525] rounded-3xl md:row-start-11 2xl:row-start-5 md:row-span-2 lg:row-span-1 2xl:row-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-1 lg:col-start-7 px-2 py-4">
				<SeventhBlock />
			</motion.div>

			{/* Work Together */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 2.25 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:row-start-11 lg:row-start-7 2xl:row-start-5 md:row-span-4 2xl:row-span-5 col-span-3 2xl:col-span-2 px-4 py-8 flex justify-center items-center text-white">
				<EighthBlock />
			</motion.div>

			{/* Skill Chart */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 2.5 }}
				className="bg-[#161616] border border-[#252525] rounded-3xl md:row-start-15 lg:row-start-9 2xl:row-start-1 lg:col-start-1 2xl:col-start-7 row-span-2 2xl:row-span-4 col-span-4 2xl:col-span-2">
				<NinethBlock />
			</motion.div>

			{/* Github Link */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 2.75 }}
				className="md:block hidden bg-[#161616] border border-[#252525] rounded-3xl md:row-start-13 lg:row-start-11 2xl:row-start-1 lg:col-start-1 2xl:col-start-9 md:row-span-2 lg:row-span-1 2xl:row-span-2 col-span-3 lg:col-span-2 2xl:col-span-1 p-4" >
				<TenthBlock />
			</motion.div >

			{/* Project Completed */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 3 }}
				className="md:block hidden bg-[#161616] border border-[#252525] rounded-3xl md:row-start-15 lg:row-start-11 2xl:row-start-3 lg:row-span-1 md:col-start-5 lg:col-start-3 2xl:col-start-9 md:row-span-2 2xl:row-span-2 col-span-2 2xl:col-span-1 px-2 py-4" >
				<EleventhBlock />
			</motion.div >


			{/* Dark Mode */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeInOut", delay: 3.25 }}
				className="hidden lg:block bg-[#161616] border border-[#252525] rounded-3xl row-start-17 lg:row-start-11 2xl:row-start-9 row-span-1 md:col-span-2 2xl:col-span-1 lg:col-start-5 2xl:col-start-3 overflow-hidden">
				<TwelveBlock />
			</motion.div>


			<div className="md:hidden flex gap-4">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut", delay: 3.5 }}
					className="w-full bg-[#161616] border border-[#252525] rounded-3xl px-2 py-4">
					<SeventhBlock />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut", delay: 3.75 }}
					className="w-full bg-[#161616] border border-[#252525] rounded-3xl px-2 py-4" >
					<EleventhBlock />
				</motion.div >
			</div>


			<div className="md:hidden flex gap-4">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut", delay: 4 }}
					className="w-full bg-[#161616] border border-[#252525] rounded-3xl p-4">
					<FifthBlock />
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeInOut", delay: 4.25 }}
					className="w-full bg-[#161616] border border-[#252525] rounded-3xl p-4" >
					<TenthBlock />
				</motion.div >
			</div>

		</div >
	)
}

export default Home