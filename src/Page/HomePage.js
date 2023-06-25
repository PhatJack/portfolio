import React from 'react'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { FiHome } from "react-icons/fi";
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RoundedText } from '../Icon/icon';
import Container from '../components/container/Container';
function HomePage() {
	const handleClick = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
		}
	};
	return (
		<Container>
			<div className="flex" id="home">
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<FiHome />
						Introduce
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Hello, I’m <span className='text-primary'>Jack</span>,
						<p>
							a Front-end Developer <br></br>and Designer
						</p>
					</CustomSubTitle.Body>
					<CustomSubTitle.Description>
						I design and code beautifully simple things and i love what i do.<br></br>Just simple like that!
					</CustomSubTitle.Description>
				</CustomSubTitle>
			</div>
			<Link to="#project" 
				onClick={() => handleClick('project')}
				className='w-[175px] h-[175px] relative border border-gray-500 flex justify-center items-center ml-auto rounded-full mt-10'>
				<img src={RoundedText} alt="" className='animate-[spin_7s_linear_infinite] duration-1000' />
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
		</Container>
	)
}

export default HomePage