import React from 'react'
import { BiEnvelope, BiUser } from 'react-icons/bi'
import { BsColumnsGap } from 'react-icons/bs'
import { FiHome } from 'react-icons/fi'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const menu = [
	{ icon: FiHome, path: "/" },
	{ icon: BiUser, path: "/about" },
	{ icon: HiOutlineBriefcase, path: "/education" },
	{ icon: BsColumnsGap, path: "/project" },
	{ icon: BiEnvelope, path: "/contact" },
]

const List = () => {
	return (
		<ul className='flex flex-col justify-between items-center h-full w-full py-5 gap-10'>
			{menu.map((item, index) => (
				<li key={index}>
					<Link to={item.path}>
						<item.icon size={23} className="text-gray-600 hover:text-primary transition-all" />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default List
