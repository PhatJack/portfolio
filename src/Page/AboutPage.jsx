import React, { useEffect } from 'react'
import Container from '../components/container/Container'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { BiUser } from "react-icons/bi";
function AboutPage() {
	return (
		<div id="about">
			<Container>
				<CustomSubTitle>
					<div data-aos="fade-right" data-aos-duration="1500">
						<CustomSubTitle.Head>
							<BiUser />
							About
						</CustomSubTitle.Head>
					</div>
					<CustomSubTitle.Body >
						<div data-aos="fade-up" >
							Everyday is a story, it’s your choice to make it <span className='text-primary'>better</span>
						</div>
					</CustomSubTitle.Body>
					<CustomSubTitle.Description>
						<div data-aos="fade-up">
							From a modest beginning, I embraced design with passion and relentless dedication.
							Despite a slower start, I pushed myself to work harder, continuously striving for improvement.
							Fuelled by creativity, I aim to leave a lasting impact through my work, exceeding expectations along the way.
							My unwavering passion propels me forward on this design journey, shaping me into the designer I am today.
						</div>
					</CustomSubTitle.Description>
				</CustomSubTitle>
			</Container>
		</div >
	)
}

export default AboutPage