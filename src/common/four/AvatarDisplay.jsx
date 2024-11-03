// AvatarDisplay.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const getMasks = () => {
	const hiddenMaskLines = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
	const visibleMaskLines = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

	const gradient = (direction, size, mask) =>
		`repeating-linear-gradient(to ${direction}, ` +
		`black 0px, ` +
		`black ${mask ? 0 : size / 2}px, ` +
		`transparent ${mask ? 0 : size / 2}px, ` +
		`transparent ${mask ? size : size / 2}px, ` +
		`black ${mask ? size : size / 2}px, ` +
		`black ${size}px` +
		")";

	const hiddenMaskSquares = `${gradient("right", 30, true)}, ${gradient("bottom", 30, true)}`;
	const visibleMaskSquares = `${gradient("right", 30, false)}, ${gradient("bottom", 30, false)}`;

	return {
		lines: { hidden: hiddenMaskLines, visible: visibleMaskLines },
		squares: { hidden: hiddenMaskSquares, visible: visibleMaskSquares }
	};
};

const AvatarDisplay = ({ avatars }) => {
	const masks = getMasks();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentMask, setCurrentMask] = useState('lines');

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === avatars.length - 1 ? 0 : prevIndex + 1));
			setCurrentMask(Math.random() < 0.5 ? 'lines' : 'squares');
		}, 4000);

		return () => clearInterval(timer);
	}, [avatars.length]);

	const currentMaskSet = masks[currentMask];

	return (
		<motion.div
			key={currentIndex}
			initial={{ WebkitMaskImage: currentMaskSet.hidden, maskImage: currentMaskSet.hidden }}
			animate={{ WebkitMaskImage: currentMaskSet.visible, maskImage: currentMaskSet.visible }}
			exit={{ WebkitMaskImage: currentMaskSet.hidden, maskImage: currentMaskSet.hidden }}
			transition={{ duration: 1, ease: "linear" }}
			className="w-full h-full aspect-[3/4] rounded-2xl border bg-custom-gradient animate-border border-transparent overflow-hidden"
		>
			<img
				src={avatars[currentIndex]}
				alt={`Avatar ${currentIndex + 1}`}
				className="w-full h-full object-cover object-bottom"
			/>
		</motion.div>
	);
};

export default AvatarDisplay;