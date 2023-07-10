import React from 'react'
import Container from '../components/container/Container'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { BsColumnsGap } from 'react-icons/bs'
import Project from '../components/project/Project'
import { Demo } from '../Icon/icon'
function ProjectPage() {
	return (
		<div id="project">
			<Container>
				<CustomSubTitle>
					<div data-aos="fade-right" data-aos-duration="1500">
						<CustomSubTitle.Head>
							<BsColumnsGap />
							Projects
						</CustomSubTitle.Head>
					</div>
					<div data-aos="fade-up" data-aos-duration="1000">
						<CustomSubTitle.Body>
							Featured & <span className='text-primary'>Project</span>
						</CustomSubTitle.Body>
					</div>
				</CustomSubTitle>
				<div className="grid grid-cols-[auto_auto] grid-rows-[auto_auto_auto] gap-10" data-aos="fade-up" data-aos-duration="1500">
					<Project src={Demo} name="Future world by AI" className="col-start-1 col-end-3">
					</Project>
					<Project src={Demo} name="Future world by AI">
					</Project>
					<Project src={Demo} name="Future world by AI">
					</Project>
					<Project src={Demo} name="Future world by AI" className="col-start-1 col-end-3">
					</Project>
				</div>
			</Container>
		</div>
	)
}

export default ProjectPage