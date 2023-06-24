import React from 'react'
import Container from '../components/container/Container'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { BiUser } from "react-icons/bi";
function AboutPage() {
	return (
		<div className="pb-[290px]" id="about">
			<Container>
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<BiUser />
						About
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Everyday is a story, it’s your choice to make it <span className='text-primary'>better</span>
					</CustomSubTitle.Body>
					<CustomSubTitle.Description>
						From a modest beginning, I embraced design with passion and relentless dedication.
						Despite a slower start, I pushed myself to work harder, continuously striving for improvement.
						Fuelled by creativity, I aim to leave a lasting impact through my work, exceeding expectations along the way.
						My unwavering passion propels me forward on this design journey, shaping me into the designer I am today.
					</CustomSubTitle.Description>
				</CustomSubTitle>
			</Container>
		</div>
	)
}

export default AboutPage