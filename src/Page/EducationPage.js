'use client';

import React from 'react'
import Container from '../components/container/Container'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { HiOutlineBriefcase } from 'react-icons/hi'
function EducationPage() {
	return (
		<Container>
			<div className="" id="education">
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<HiOutlineBriefcase />
						Education
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Education & <span className='text-primary'> Experience </span>
					</CustomSubTitle.Body>
				</CustomSubTitle>
				<div className="timeline">
					<div className="relative group/hover-dot">
						<div className="line"></div>
						<div className="dot group-hover/hover-dot:bg-primary transition-all"></div>
						<div className="pl-10">
							<span className='timeline-date group-hover/hover-dot:text-primary transition-all'>2021 - Present</span>
							<h3 className="timeline-title">Bachelor Degree of Information Technology</h3>
							<p className='text-gray-500'>
								SGU University
							</p>
						</div>
					</div>
					<div className="relative group/hover-dot">
						<div className="line"></div>
						<div className="dot group-hover/hover-dot:bg-primary transition-all"></div>
						<div className="pl-10">
							<span className='timeline-date group-hover/hover-dot:text-primary transition-all'>2020 - 2021</span>
							<h3 className="timeline-title">Front End Developer Course</h3>
							<p className='text-gray-500'>
								Udemy Course
							</p>
						</div>
					</div>
					<div className="relative group/hover-dot">
						<div className="line"></div>
						<div className="dot group-hover/hover-dot:bg-primary transition-all"></div>
						<div className="pl-10">
							<span className='timeline-date group-hover/hover-dot:text-primary transition-all'>2018 - 2022</span>
							<h3 className="timeline-title">Bachelor Degree of Information Technology</h3>
							<p className='text-gray-500'>
								RMIT
							</p>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default EducationPage