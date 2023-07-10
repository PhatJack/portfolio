import React from 'react'

function Project(props) {
	return (
		<div className={props.className}>
			<div className="mt-8 group/project flex-[0_0_auto]">
				<div className="relative overflow-hidden rounded-[30px] mb-8 h-[400px]">
					<img src={props.src} alt="" className='w-full h-full object-cover' />
					<ul className='absolute bottom-5 left-5 flex gap-4'>
						<li className='absolute-text group-hover/project:bg-black group-hover/project:text-white'>
							Demo
						</li>
						<li className='absolute-text group-hover/project:bg-black group-hover/project:text-white'>
							Figma
						</li>
					</ul>
				</div>
				<h2 className='underline-text relative text-3xl cursor-pointer pb-2 tracking-wider w-fit'>{props.name}</h2>
			</div>
		</div>
	)
}
export default Project