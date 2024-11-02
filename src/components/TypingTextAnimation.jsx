import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TypewriterText = ({
	texts = [],
	typeSpeed = 0.05,
	deleteSpeed = 0.03,
	delayBetween = 2,
	loop = true,
	className = ""
}) => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ opacity: 1 });
	}, [controls]);

	useEffect(() => {
		if (texts.length === 0) return;

		if (isWaiting) {
			const waitTimer = setTimeout(() => {
				setIsWaiting(false);
				setIsDeleting(true);
			}, delayBetween * 1000);
			return () => clearTimeout(waitTimer);
		}

		const currentFullText = texts[currentTextIndex];
		const speed = isDeleting ? deleteSpeed : typeSpeed;

		const timeout = setTimeout(() => {
			if (!isDeleting && displayText === currentFullText) {
				setIsWaiting(true);
				return;
			}

			if (isDeleting && displayText === "") {
				setIsDeleting(false);
				setCurrentTextIndex(current =>
					loop ? (current + 1) % texts.length :
						current < texts.length - 1 ? current + 1 : current
				);
				return;
			}

			setDisplayText(current => {
				if (isDeleting) {
					return current.slice(0, -1);
				} else {
					return currentFullText.slice(0, current.length + 1);
				}
			});
		}, speed * 1000);

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, currentTextIndex, isWaiting, texts, typeSpeed, deleteSpeed, delayBetween, loop]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={controls}
			className={`relative ${className}`}
		>
			<span className="text-lg font-semibold">
				{displayText}
				<motion.span
					animate={{ opacity: [1, 0] }}
					transition={{
						duration: 0.5,
						repeat: Infinity,
						repeatType: "reverse"
					}}
					className="inline-block w-0.5 h-3.5 bg-blue-500 ml-1"
				>
					
				</motion.span>
			</span>
		</motion.div>
	);
};

export default TypewriterText;