import { School } from 'lucide-react'
import { Medal } from 'lucide-react'
import React from 'react'

const ThirdBlock = () => {
	return (
		<div className="size-full flex flex-col space-y-1 justify-start items-center">
			<div className="flex flex-col items-center px-4 pt-4">
				<p className='flex text-sm items-center text-[#999999]'>
					<span className='mr-2 font-medium '>
						<Medal className='text-blue-500' />
					</span>
					Achievements</p>
				<p className='text-xl font-semibold text-[#e6e6e6]'>Education Rewards</p>
			</div>
			<div className="w-full h-px bg-[#252525]"></div>
			<div className="w-full p-4 flex flex-col gap-4">
				<div className='w-full bg-[rgb(25,25,25)] text-[#CCCCCC] rounded-2xl flex justify-between items-center p-3 group relative border border-[rgb(33,33,33)]'>
					<div className="flex items-center gap-2">
						<span className='size-10 flex justify-center items-center bg-[#282828] rounded-lg'>
							<School className='text-[#ccc]' />
						</span>
						<div className="">
							<p className='font-medium'>Scholarship</p>
						</div>
					</div>
					<p className='font-semibold'>2022-2024</p>
				</div>
			</div>
		</div>
	)
}

export default ThirdBlock