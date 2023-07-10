import React from 'react'
import Container from '../components/container/Container'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import { BsColumnsGap } from 'react-icons/bs'
import Project from '../components/project/Project'
import { Demo } from '../Icon/icon'
function ProjectPage() {
	return (
		<Container>
			<div id="project">
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<BsColumnsGap />
						Projects
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Featured & <span className='text-primary'>Project</span>
					</CustomSubTitle.Body>
				</CustomSubTitle>
				<div className="grid grid-cols-[auto_auto] grid-rows-[auto_auto_auto] gap-10">
					<Project src={Demo} name="Future world by AI" className="col-start-1 col-end-3">
					</Project>
					<Project src={Demo} name="Future world by AI">
					</Project>
					<Project src={Demo} name="Future world by AI">
					</Project>
					<Project src={Demo} name="Future world by AI" className="col-start-1 col-end-3">
					</Project>
				</div>
			</div>
		</Container>
	)
}

export default ProjectPage