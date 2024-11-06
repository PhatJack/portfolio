import React from 'react'
import ImgProject1 from '../../assets/img/flower-delivery.png'
import ImgProject2 from '../../assets/img/pomodoro.png'
import ImgProject3 from '../../assets/img/portfolio.png'
import ImgProject4 from '../../assets/img/tutien-game.png'
import ImgProject5 from '../../assets/img/static-jobs-listing.png'
import ImgProject6 from '../../assets/img/weather-app.png'
import { BriefcaseConveyorBelt } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
const MiddleBlock = () => {

	const projectsList = [{
		img: ImgProject1,
		title: 'Flower Delivery',
		category: 'Web Development',
		githubLink: "https://github.com/PhatJack/flower-delivery"
	}, {
		img: ImgProject2,
		title: 'Pomodoro',
		category: 'Web Development',
		githubLink: "https://github.com/PhatJack/pomodoro"
	}, {
		img: ImgProject3,
		title: 'Portfolio',
		category: 'Web Development',
		githubLink: "https://github.com/PhatJack/portofolio-v4"
	}, {
		img: ImgProject4,
		title: 'Tu Tien Game',
		category: 'Web Development',
		githubLink: ""
	}, {
		img: ImgProject5,
		title: 'Static Jobs Listing',
		category: 'Web Development',
		githubLink: "https://github.com/PhatJack/static-job-listings"
	}, {
		img: ImgProject6,
		title: 'Weather App',
		category: 'Mobile Development',
		githubLink: "https://github.com/PhatJack/weather-app-react"
	},
];

const onOpenProject = (link) => {
	window.open(link, '_blank')
}

	return (
		<div className='flex flex-col space-y-2 justify-center items-center size-full h-fit p-4 border bg-[#101010] border-[#252525] rounded-3xl'>
			<p className='flex text-sm items-center text-[#999999]'>
				<span className='mr-2 font-medium '>
					<BriefcaseConveyorBelt className='text-blue-500' />
				</span>
				My Works</p>
			<p className='text-xl font-semibold text-[#e6e6e6]'>My Top 6 Projects</p>
			<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
				{
					projectsList.map((project, index) => (
						<div key={index} onClick={() => onOpenProject(project.githubLink)} className="w-full bg-[#191919] hover:bg-[#252525] rounded-2xl p-4 group cursor-pointer transition-all">
							<div className="w-full lg:h-32 rounded-2xl overflow-hidden">
								<img src={project.img} alt="" loading='lazy' className='size-full object-cover' />
							</div>
							<div className="w-full flex justify-between items-center mt-2">
								<div className="flex flex-col">
									<p className='text-lg font-semibold text-[#e6e6e6]'>{project.title}</p>
									<p className='text-sm text-[#999999]'>{project.category}</p>
								</div>
								<span className='size-12 p-2 rounded-full inline-flex justify-center items-center bg-[#1f1f1f] border border-[#333] relative overflow-hidden'>
									<ArrowUpRight className='text-[#999] absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:top-0 group-hover:left-full transition-all duration-300' />
									<GitHubLogoIcon className='size-5 text-[#999] absolute -translate-x-1/2 -translate-y-1/2 top-full left-0 transition-all group-hover:top-1/2 group-hover:left-1/2 duration-300' />
								</span>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default MiddleBlock