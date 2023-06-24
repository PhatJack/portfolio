import React from 'react'
import Container from '../components/container/Container'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { BsColumnsGap } from 'react-icons/bs'
function ProjectPage() {
	return (
		<Container>
			<div className="" id="project">
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<BsColumnsGap />
						Projects
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Featured & <span className='text-primary'>Project</span>
					</CustomSubTitle.Body>
				</CustomSubTitle>
			</div>
		</Container>
	)
}

export default ProjectPage