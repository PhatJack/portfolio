import React from 'react'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { FiHome } from "react-icons/fi";
import { BiUser, BiEnvelope } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BsColumnsGap,BsArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RoundedText } from '../Icon/icon';
function HomePage() {
	return (
		<div className="py-16">
			<div className='text-white relative ml-auto max-w-[1200px] w-full'>
				<div className="hero-container max-w-[770px] w-full overflow-hidden">
					<div className="flex">
						<CustomSubTitle>
							<CustomSubTitle.Head>
								<FiHome />
								Introduce
							</CustomSubTitle.Head>
							<CustomSubTitle.Body>
								Hello, I’m <span className='text-primary'>Jack</span>,
								<p>
									a Front-end Developer and Designer
								</p>
							</CustomSubTitle.Body>
							<CustomSubTitle.Description>
								I design and code beautifully simple things and i love what i do.<br></br>Just simple like that!
							</CustomSubTitle.Description>
						</CustomSubTitle>
					</div>
				<Link to="/project" className='w-[175px] h-[175px] relative border border-gray-500 flex justify-center items-center ml-auto rounded-full mt-10'>
					<img src={RoundedText} alt="" className='animate-[spin_7s_linear_infinite] duration-1000'/>
					<BsArrowDown size={35} className='absolute' />
				</Link>
				<div className="facts flex mt-16 font-light">
					<section>
						<h1 className='text-primary text-6xl tracking-wider leading-relaxed'>1+</h1>
						<p className='uppercase text-gray-500 pr-8 w-40'>Years of experience</p>
					</section>
					<section>
						<h1 className='text-primary text-6xl tracking-wider leading-relaxed'>3+</h1>
						<p className='uppercase text-gray-500 pr-8 w-40'>Projects Completed</p>
					</section>
				</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage