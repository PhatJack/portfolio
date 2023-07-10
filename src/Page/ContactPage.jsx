import React from 'react'
import CustomSubTitle from '../components/subtitle/CustomSubTitle'
import Container from '../components/container/Container'
import { BsEnvelope } from 'react-icons/bs'
function ContactPage() {
	return (
		<Container>
			<div className='w-full h-full' id="contact">
				<CustomSubTitle>
					<div data-aos="fade-right" data-aos-duration="1500">
						<CustomSubTitle.Head>
							<BsEnvelope />
							Contact
						</CustomSubTitle.Head>
					</div>
					<div data-aos="fade-up" data-aos-duration="1000">
						<CustomSubTitle.Body>
							Let's Work <span className='text-primary'>Together</span>
						</CustomSubTitle.Body>
					</div>
				</CustomSubTitle>
				<div data-aos="fade-up" data-aos-duration="1500">
					<h1 className='text-2xl my-8'>tienphatng.693@gmail.com</h1>
				</div>
				<form className="relative flex flex-col w-full gap-7">
					<div className="flex justify-start items-center gap-10" data-aos="fade-up" data-aos-duration="1400">
						<section>
							<label htmlFor="" className='uppercase'>Full Name</label>
							<br />
							<input type="text" name="name" id="" className='input-general w-full' placeholder={"Your full name"} />
						</section>
						<section>
							<label htmlFor="" className='uppercase'>Email</label>
							<br />
							<input type="email" name="email" id="" className='input-general w-full' placeholder={"Your email"} />
						</section>
					</div>
					<div data-aos="fade-up" data-aos-duration="1500">
						<label htmlFor="" className='uppercase'>Phone</label>
						<br />
						<input type="tel" name="phone" id="" className='input-general w-[29%]' placeholder={"Your phone number"} />
					</div>
					<div data-aos="fade-up" data-aos-duration="1600">
						<label htmlFor="" className='uppercase'>Subject</label>
						<br />
						<input type="text" name="subject" id="" className='input-general w-[63%]' placeholder={"Your topic you wanna talk about"} />
					</div>
					<div data-aos="fade-up" data-aos-duration="1700">
						<label htmlFor="" className='uppercase'>Message</label>
						<br />
						<textarea name="message" id="" cols="53" rows="4" className=' mt-3 bg-transparent border-b-[1px] focus:outline-none border-gray-600' placeholder='Write your message here'></textarea>
					</div>

					<div data-aos="fade-up" data-aos-duration="1800" className="flex gap-2">
						<input type="submit" value="Send Message" className="bg-primary px-5 py-2 text-black hover:bg-transparent hover:text-primary border-2 border-primary transition-all rounded-full text-sm" />
					</div>
				</form>
			</div>
		</Container>
	)
}

export default ContactPage