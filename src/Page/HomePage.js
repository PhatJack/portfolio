import React from 'react'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { FiHome } from "react-icons/fi";
import { BiUser, BiEnvelope } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsColumnsGap } from "react-icons/bs";

function HomePage() {
	return (
		<div className='text-white relative ml-auto max-w-[1120px]'>
			<div className="flex">
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<FiHome />
						Introduce
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Hello, I’m <span className='text-primary'>Jack</span>,
						<p className='pr-20'>
							a Front-end Developer and Designer
						</p>
					</CustomSubTitle.Body>
				</CustomSubTitle>
			</div>
		</div>
	)
}

export default HomePage