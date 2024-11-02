import { MoveRight } from 'lucide-react'
import { Layers } from 'lucide-react'
import React from 'react'

const FirstBlock = () => {
	return (
		<div className="size-full flex flex-col space-y-2 justify-center items-center overflow-hidden">
			<p className='flex items-center text-[#999999] text-sm'>
				<span className='mr-2 font-medium'>
					<Layers className='text-blue-500' />
				</span>
				My Stacks</p>
			<p className='text-xl font-semibold text-[#e6e6e6]'>Tech Arsenal</p>
			<div className="size-full grid grid-cols-2 gap-4 pb-4">
				<button className='w-full bg-[rgb(25,25,25)] text-[#CCCCCC] rounded-2xl flex gap-2 justify-start items-center px-3 group relative border border-[rgb(33,33,33)]'>
					<span className='size-10 flex justify-center items-center bg-[#282828] rounded-lg stroke-[#cccccc] fill-[#cccccc]'>
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6'><title>Framer</title><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" /></svg>
					</span>
					Framer
					<span className='opacity-0 group-hover:opacity-100 absolute right-3 transition-all duration-300 rotate-0 group-hover:-rotate-45'>
						<MoveRight size={20} />
					</span>
				</button>
				<button className='w-full bg-[rgb(25,25,25)] text-[#CCCCCC] rounded-2xl flex gap-2 justify-start items-center px-3 group relative border border-[rgb(33,33,33)]'>
					<span className='size-10 flex justify-center items-center bg-[#282828] rounded-lg stroke-[#cccccc] fill-[#cccccc]'>
						<svg className='size-6' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" /></svg>
					</span>
					Figma
					<span className='opacity-0 group-hover:opacity-100 absolute right-3 transition-all duration-300 rotate-0 group-hover:-rotate-45'>
						<MoveRight size={20} />
					</span>
				</button>
				<button className='w-full bg-[rgb(25,25,25)] text-[#CCCCCC] rounded-2xl flex gap-2 justify-start items-center px-3 group relative border border-[rgb(33,33,33)]'>
					<span className='size-10 flex justify-center items-center bg-[#282828] rounded-lg stroke-[#cccccc] fill-[#cccccc]'>
						<svg className='size-6' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Webflow</title><path d="m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z" /></svg>
					</span>
					WebFlow
					<span className='opacity-0 group-hover:opacity-100 absolute right-3 transition-all duration-300 rotate-0 group-hover:-rotate-45'>
						<MoveRight size={20} />
					</span>
				</button>
				<button className='w-full bg-[rgb(25,25,25)] text-[#CCCCCC] rounded-2xl flex gap-2 justify-start items-center px-3 group relative border border-[rgb(33,33,33)]'>
					<span className='size-10 flex justify-center items-center bg-[#282828] rounded-lg stroke-[#cccccc] fill-[#cccccc]'>
						<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6'><title>Shopify</title><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" /></svg>
					</span>
					Shopify
					<span className='opacity-0 group-hover:opacity-100 absolute right-3 transition-all duration-300 rotate-0 group-hover:-rotate-45'>
						<MoveRight size={20} />
					</span>
				</button>
			</div>
		</div>
	)
}

export default FirstBlock