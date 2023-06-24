import React from 'react'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import Container from '../components/container/Container'
import { BsEnvelope } from 'react-icons/bs'
function ContactPage() {
	return (
		<Container>
			<div className="" id="contact">
				<CustomSubTitle>
					<CustomSubTitle.Head>
						<BsEnvelope />
						Contact
					</CustomSubTitle.Head>
					<CustomSubTitle.Body>
						Let's Work <span className='text-primary'>Together</span>
					</CustomSubTitle.Body>
				</CustomSubTitle>
			</div>
			
		</Container>
	)
}

export default ContactPage