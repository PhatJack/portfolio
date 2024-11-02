import { Mail } from 'lucide-react';
import { Crown } from 'lucide-react';
import { CalendarArrowUp } from 'lucide-react';
import { Phone } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const EighthBlock = () => {

	const contactLinks = [
		{
			to: "tel:0344248396",
			icon: <Phone className="text-blue-500" />,
			text: "Contact me"
		},
		{
			to: "mailto:tienphat.ng693@gmail.com",
			icon: <Mail className="text-blue-500" />,
			text: "Email me"
		},
		{
			to: "https://forms.gle/wnwHa79wRbHwSi5g7",
			icon: <CalendarArrowUp className="text-blue-500" />,
			text: "Schedule me",
			external: true
		}
	];

	const ContactLink = ({ to, icon, text, external }) => (
		<Link
			to={to}
			target={external ? '_blank' : undefined}
			className="flex justify-center items-center py-3 w-full space-x-2 rounded-lg
                hover:animate-border bg-custom-gradient-button border border-[#1f1f1f] hover:border-transparent transition-all"
		>
			{icon}
			<span className="text-lg font-semibold text-zinc-400">{text}</span>
		</Link>
	);

	return (
		<div className="w-full flex flex-col items-center space-y-6">
			{/* Icon Header */}
			<div className="size-20 rounded-full flex items-center justify-center bg-zinc-800 p-2">
				<Crown className="text-blue-500" size={45} />
			</div>
			{/* Text Content */}
			<div className="text-center space-y-1">
				<h2 className="text-2xl font-semibold text-[#999]">Let's work together</h2>
				<p className="text-lg font-semibold text-muted-foreground">Let's Make Magic Happen Together!</p>
			</div>

			{/* Contact Links */}
			<div className="w-full space-y-4 pt-2">
				{contactLinks.map((link, index) => (
					<ContactLink key={index} {...link} />
				))}
			</div>
		</div>
	)
}

export default EighthBlock