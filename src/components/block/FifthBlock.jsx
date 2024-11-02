import { Sparkle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import ZuniLab from '../../assets/team.png'

const FifthBlock = () => {
	return (
		<div className="size-full flex flex-col gap-2 justify-center items-center bg-transparent relative">
			<Link to={"https://github.com/zuni-lab"} target='_blank' className="size-28 2xl:size-16 rounded-xl overflow-hidden bg-custom-gradient-button border border-transparent animate-border">
				<img src={ZuniLab} alt="ZuniLab" className="w-full h-full object-cover" />
			</Link>
			<div className="w-full flex justify-center items-center gap-1 border border-[#252525] bg-[#1f1f1f] rounded-full px-3 py-2 mt-0.5 relative z-10">
				<Sparkle className="w-4 h-4 text-blue-500" />
				<span className="text-sm 2xl:text-base font-semibold text-gray-300 whitespace-nowrap">Zuni Lab</span>
			</div>
		</div>
	)
}

export default FifthBlock