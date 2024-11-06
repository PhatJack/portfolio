import { Star, MoveRight,Activity } from 'lucide-react'
import React from 'react'
import SmallAvatar from '@/assets/smallavatar.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const LeftBlock = () => {

	const navigate = useNavigate()
	const socialLinks = [
		{
			url: "https://www.facebook.com/jack.willam2003",
			label: "Facebook me",
			icon: (
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6'>
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
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6'>
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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#0A66C2' className='size-9'>
					<path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z" />
				</svg>
			)
		},
		{
			url: "https://leetcode.com/u/PhatJack/",
			label: "Leetcode me",
			icon: (
				<svg role="img" viewBox="0 0 24 24" fill='#FFA116' xmlns="http://www.w3.org/2000/svg" className='size-7'><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" /></svg>
			)
		}
	]

	return (
		<>
			<div className="w-full flex lg:flex-col sm:flex-row flex-col gap-4">
				<div className="w-full h-fit p-4 border bg-[#101010] border-[#252525] rounded-3xl">
					<div className="size-full flex flex-col justify-center items-center bg-transparent relative">
						<p className='text-5xl sm:text-6xl font-semibold text-[#ccc] select-none'>
							755<span className='text-blue-500'>+</span>
						</p>
						<span className='w-full h-10 2xl:h-14 absolute lg:top-6 opacity-100 [background:linear-gradient(180deg,rgb(15,15,15,0%)_0%,#161616_92.6%)]' />
						<div className="w-full flex justify-center items-center gap-1 border border-[#252525] bg-[#1f1f1f] rounded-full px-3 py-2 lg:py-1 2xl:py-2 mt-0.5 relative z-10">
							<Activity className="w-4 h-4 text-blue-500" />
							<span className="text-base font-semibold text-gray-300">Hours of Coding</span>
						</div>
					</div>
				</div>
				<div className="w-full h-fit p-4 border bg-[#101010] border-[#252525] rounded-3xl">
					<div className="size-full flex flex-col justify-center items-center bg-transparent relative">
						<p className='text-5xl sm:text-6xl font-semibold text-[#ccc] select-none'>
							6<span className='text-blue-500'>+</span>
						</p>
						<span className='w-full h-10 2xl:h-14 absolute lg:top-6 opacity-100 [background:linear-gradient(180deg,rgb(15,15,15,0%)_0%,#161616_92.6%)]' />
						<div className="w-full flex justify-center items-center gap-1 border border-[#252525] bg-[#1f1f1f] rounded-full px-3 py-2 lg:py-1 2xl:py-2 mt-0.5 relative z-10">
							<Star className="w-4 h-4 text-blue-500" />
							<span className="text-base font-semibold text-gray-300">Stars in Github</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-full border bg-[#101010] border-[#252525] rounded-3xl p-4">
				<div className="bg-hero-pattern w-full h-full bg-no-repeat bg-contain bg-top flex flex-col items-center gap-4">
					<div className="text-[#ccc] flex flex-col items-center gap-4 pt-6">
						<div className="size-24 rounded-xl overflow-hidden border">
							<img src={SmallAvatar} loading='lazy' alt="small avatar" className='size-full object-cover object-center' />
						</div>
						<p className='font-bold text-xl'>Nguyen Tien Phat</p>
					</div>
					<div className="w-full flex flex-col gap-2 lg:mt-0 mt-6">
						{socialLinks.map(({ url, label, icon, iconBgClass }, index) => (
							<Link
								key={url}
								to={url}
								target='_blank'
								className='border border-[#252525] bg-custom-gradient-button hover:border-transparent hover:animate-border w-full flex items-center gap-2 py-2 pl-2 pr-8 rounded-lg group relative'
							>
								<span className={`size-10 flex justify-center items-center bg-[#282828] rounded-lg ${iconBgClass}`}>
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
						<div className="w-full bg-black flex justify-center items-center rounded-xl p-1">
							<button type='button' onClick={() => navigate('/')} className='w-full rounded-lg py-3 bg-blue-500 text-white font-semibold'>
								About me
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LeftBlock