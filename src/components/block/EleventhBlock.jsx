import { Flag } from 'lucide-react'
import React from 'react'

const EleventhBlock = () => {
	return (
		<div className="size-full flex flex-col justify-center items-center bg-transparent relative">
			<p className='text-6xl font-semibold text-[#ccc] select-none'>
				5<span className='text-blue-500'>+</span>
			</p>
			<span className='w-full h-10 2xl:h-14 absolute top-24 lg:top-6 2xl:top-8 opacity-100 [background:linear-gradient(180deg,rgb(15,15,15,0%)_0%,#161616_92.6%)]' />
			<div className="w-full flex justify-center items-center gap-1 border border-[#252525] bg-[#1f1f1f] rounded-full px-3 py-2 lg:py-1 2xl:py-2 mt-0.5 relative z-10">
				<Flag className="w-4 h-4 text-blue-500" />
				<span className="text-base font-semibold text-gray-300">Projects</span>
			</div>
		</div>
	)
}

export default EleventhBlock