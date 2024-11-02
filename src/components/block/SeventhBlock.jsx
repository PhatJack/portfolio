import { Sparkle } from 'lucide-react'
import React from 'react'

const SeventhBlock = () => {
	return (
		<div className="size-full flex flex-col justify-center items-center bg-transparent relative">
			<p className='text-6xl font-semibold text-[#ccc] select-none'>
				0.5<span className='text-blue-500'>+</span>
			</p>
			<span className='w-full h-14 absolute lg:top-5 2xl:top-8 opacity-100 [background:linear-gradient(180deg,rgb(15,15,15,0%)_0%,#161616_92.6%)]' />
			<div className="w-full flex justify-center items-center gap-1 border border-[#252525] bg-[#1f1f1f] rounded-full px-3 py-2 mt-0.5 relative z-10">
				<Sparkle className="w-4 h-4 text-blue-500" />
				<span className="text-base font-semibold text-gray-300 whitespace-nowrap">Year Expertise</span>
			</div>
		</div>
	)
}

export default SeventhBlock