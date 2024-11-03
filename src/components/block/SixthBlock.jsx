import { ChartSpline } from 'lucide-react'
import React from 'react'

const SixthBlock = () => {
	return (
		<div className="size-full flex flex-col gap-2 justify-center items-center">
			<p className='flex text-sm items-center text-[#999999]'>
				<span className='mr-2 font-medium '>
					<ChartSpline className='text-blue-500' />
				</span>
			Contributions</p>
			<p className='text-xl font-semibold text-[#e6e6e6]'>Github's contribution 2024</p>
			<div className="size-full flex justify-center items-center">
				<iframe width="780px" className='h-48 md:h-[161px]' src="https://git-graph.vercel.app/embed/PhatJack?showColorLegend=true&showWeekdayLabels=false&showMonthLabels=true&showTotalCount=true&blockMargin=2&blockRadius=2&blockSize=12&fontSize=14&weekStart=6&year=2024"></iframe>
			</div>
		</div>
	)
}

export default SixthBlock