import React, { useCallback } from 'react'
import Avatar from '../../assets/avatar.jpg'
import { Link } from 'react-router-dom'
import { MoveRight, Download, MapPin, Globe, GraduationCap, Clock, BookText, Smile, PartyPopper } from 'lucide-react'
import TypewriterText from '../TypingTextAnimation'
import AvatarOne from '../../assets/avatar/avatar1.jpg'
import AvatarTwo from '../../assets/avatar/avatar2.jpg'
import AvatarThree from '../../assets/avatar/avatar3.jpg'
import AvatarFour from '../../assets/avatar/avatar4.jpg'
import AvatarFive from '../../assets/avatar/avatar5.jpg'
import AvatarSix from '../../assets/avatar/avatar6.jpg'
import AvatarSeven from '../../assets/avatar/avatar7.jpg'
import AvatarEight from '../../assets/avatar/avatar8.jpg'
import AvatarNine from '../../assets/avatar/avatar9.jpg'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
const socialLinks = [
	{
		url: "https://www.facebook.com/jack.willam2003",
		label: "Facebook me",
		icon: (
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-7'>
				<title>Facebook</title>
				<path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
			</svg>
		),
		iconBgClass: "fill-blue-500"
	},
	{
		url: "https://www.instagram.com/sep_neit.tahp/",
		label: "Instagram me",
		icon: (
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-7'>
				<title>Insta360</title>
				<path d="M15.402 11.19c-.701.7-1.838.7-2.54 0a1.796 1.796 0 1 1 2.539 0m.998-3.614a6.17 6.17 0 0 0-4.39-1.818 6.17 6.17 0 0 0-4.392 1.818 6.217 6.217 0 0 0 0 8.782 6.169 6.169 0 0 0 4.39 1.819 6.169 6.169 0 0 0 4.392-1.82 6.217 6.217 0 0 0 0-8.78m1.554 10.33a8.353 8.353 0 0 1-5.945 2.462 8.353 8.353 0 0 1-5.944-2.46c-3.277-3.277-3.277-8.607 0-11.883a8.353 8.353 0 0 1 5.944-2.46 8.35 8.35 0 0 1 5.944 2.46c3.278 3.276 3.278 8.606 0 11.882m4.51-11.293a20.81 20.81 0 0 1-.137-.292 2.779 2.779 0 0 1 .485-3.007c.018-.014.08-.08.117-.118a.412.412 0 0 0 .053-.069.66.66 0 0 0-.097-.81.296.296 0 0 0-.026-.02 1.113 1.113 0 0 0-.18-.11l-.068-.034A19.08 19.08 0 0 0 9.71.443l-.016.022a11.708 11.708 0 0 0-6.012 3.218c-3.75 3.75-4.44 9.403-2.065 13.852.023.043.107.195.123.233a2.778 2.778 0 0 1-.556 2.919 4.39 4.39 0 0 0-.072.08.66.66 0 0 0 0 .934c.06.056.127.105.198.146l.01.006a19.08 19.08 0 0 0 13 1.677v.002a11.708 11.708 0 0 0 5.997-3.216c3.709-3.708 4.423-9.277 2.144-13.702" />
			</svg>
		),
		iconBgClass: "stroke-[#E4405F] fill-[#E4405F]"
	},
	{
		url: "https://www.linkedin.com/in/phat-nguyen-tien-733397286/",
		label: "Linkedln me",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#0A66C2' className='size-10'>
				<path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
			</svg>
		)
	}
]

const infoTags = [
	{ icon: MapPin, text: "Viet Nam" },
	{ icon: Globe, text: "English & Vietnamese" },
	{ icon: BookText, text: "Sai Gon University" },
	{ icon: Clock, text: "IST" },
	{ icon: GraduationCap, text: "Software Engineer" },
	{ icon: Smile, text: "Good boy" },
	{ icon: PartyPopper, text: "Extrovert & Introvert" }
]

const FourthBlock = () => {

	const avatars = [Avatar, AvatarOne, AvatarTwo, AvatarThree, AvatarFour, AvatarFive, AvatarSix, AvatarSeven, AvatarEight, AvatarNine]
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleDownload = useCallback(() => {
		const pdfUrl = "/src/CV_NguyenTienPhat_Front-endDeveloper.pdf"
		const link = document.createElement("a")
		link.href = pdfUrl
		link.download = "CV_NguyenTienPhat_Front-endDeveloper.pdf"
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}, [])

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setCurrentIndex((prevIndex) =>
	// 			prevIndex === avatars.length - 1 ? 0 : prevIndex + 1
	// 		);
	// 	}, 4000);

	// 	return () => clearInterval(timer);
	// }, []);

	return (
		<div className="size-full flex flex-col space-y-4">
			<div className="w-full h-full flex gap-4 overflow-hidden">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.35,
						ease: "easeInOut"
					}}
					className="w-full h-full rounded-2xl border bg-custom-gradient animate-border border-transparent overflow-hidden"
				>
					<img
						src={avatars[currentIndex]}
						alt={`Avatar ${currentIndex + 1}`}
						className="w-full h-full object-cover object-bottom"
					/>
				</motion.div>
				<div className="w-full flex flex-col justify-start space-y-2 overflow-hidden">
					<div className="w-full flex justify-between items-center">
						<div className='w-fit h-10 relative size-8 bg-[#1f1f1f] flex items-center rounded-full'>
							<span className='absolute left-4 size-3 bg-green-500 rounded-full animate-pulse-custom' />
							<p className='ml-10 mr-4 font-semibold text-[#999] whitespace-nowrap'>Available to work</p>
						</div>
						<div className=" flex justify-end items-center text-[#999] space-x-2">
							<span className='font-semibold'>Resume</span>
							<button
								type='button'
								onClick={handleDownload}
								className="size-10 flex justify-center items-center bg-[#282828] rounded-lg hover:rounded-full transition-[border-radius]"
							>
								<Download size={22} />
							</button>
						</div>
					</div>
					<p className='font-bold text-white text-3xl pt-2'>Nguyen Tien Phat</p>
					<div className='text-[#999] font-medium text-lg flex gap-1'>
						I'm a
						<TypewriterText
							texts={["Front-end Developer", "Designer", "Senior Student", "Freelancer", "English Enthusiast"]}
							typeSpeed={0.07}
							deleteSpeed={0.04}
							delayBetween={2}
							className="text-blue-500"
						/>
					</div>
					<div className="w-full h-auto p-2 2xl:p-3 bg-[#1f1f1f] border border-[#252525] rounded-lg flex flex-wrap gap-2">
						{infoTags.map(({ icon: Icon, text }) => (
							<div key={text} className="size-fit flex items-center gap-1 text-[#ccc] font-medium py-2 px-3 bg-[#181818] rounded-full">
								<Icon size={20} className='text-blue-500' />
								{text}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full h-[66px] flex gap-4">
				{socialLinks.map(({ url, label, icon, iconBgClass }) => (
					<Link
						key={url}
						to={url}
						target='_blank'
						className='border border-[#252525] bg-custom-gradient-button hover:border-transparent hover:animate-border w-full flex items-center gap-2 py-2 pl-2 pr-8 rounded-lg group relative'
					>
						<span className={`size-12 flex justify-center items-center bg-[#282828] rounded-lg ${iconBgClass}`}>
							{icon}
						</span>
						<span className='text-[#999] font-medium whitespace-nowrap'>
							{label}
						</span>
						<span className='opacity-0 group-hover:opacity-100 absolute right-3 transition-all duration-300 rotate-0 group-hover:-rotate-45'>
							<MoveRight size={20} className='text-[#999]' />
						</span>
					</Link>
				))}
			</div>
		</div>
	)
}

export default FourthBlock