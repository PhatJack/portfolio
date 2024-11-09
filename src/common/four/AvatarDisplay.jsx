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

const preloadImage = (src) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = resolve;
		img.onerror = reject;
		img.src = src;
	});
};

const AvatarDisplay = ({ avatars }) => {
	const masks = getMasks();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [currentMask, setCurrentMask] = useState('lines');
	const [isLoading, setIsLoading] = useState(false);

	// Preload the next image
	const preloadNextImage = async () => {
		const nextIndex = currentIndex === avatars.length - 1 ? 0 : currentIndex + 1;
		try {
			setIsLoading(true);
			await preloadImage(avatars[nextIndex]);
			setIsLoading(false);
		} catch (error) {
			console.error('Error preloading image:', error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		let timer;

		const transitionToNext = async () => {
			if (!isLoading) {
				// Start preloading the next image
				await preloadNextImage();

				// Only transition if component is still mounted
				setCurrentIndex((prevIndex) =>
					prevIndex === avatars.length - 1 ? 0 : prevIndex + 1
				);
				setCurrentMask(Math.random() < 0.5 ? 'lines' : 'squares');
			}
		};

		timer = setInterval(transitionToNext, 4000);

		return () => clearInterval(timer);
	}, [avatars.length, isLoading]);

	// Preload the first image on mount
	useEffect(() => {
		preloadNextImage();
	}, []);

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
				loading="eager"
				alt={`Avatar ${currentIndex + 1}`}
				className="w-full h-full object-cover object-bottom opacity-0 transition-opacity duration-300"
				onLoad={(e) => e.target.style.opacity = 1}
			/>
		</motion.div>
	);
};

export default AvatarDisplay;