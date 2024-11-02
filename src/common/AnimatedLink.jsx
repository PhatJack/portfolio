import React, { useEffect, useRef, useMemo } from 'react';

const AnimatedLink = ({
	title,
	href,
	className = '',
	linkClassName = '',
	textClassName = '',
	letterClassName = ''
}) => {
	const containerRef = useRef(null);
	const topTextRef = useRef(null);
	const bottomTextRef = useRef(null);

	// Memoize the split text to avoid unnecessary recalculations
	const letters = useMemo(() => {
		return title.split('').map((char, index) => ({
			char,
			isSpace: char === ' ',
			key: `${char}-${index}`
		}));
	}, [title]);

	useEffect(() => {
		const container = containerRef.current;
		const topLetters = topTextRef.current.querySelectorAll('.letter');
		const bottomLetters = bottomTextRef.current.querySelectorAll('.letter');

		// Initial positions
		topLetters.forEach(letter => {
			letter.style.transform = 'translateY(0)';
			letter.style.transition = 'transform 0.5s ease';
		});

		bottomLetters.forEach(letter => {
			letter.style.transform = 'translateY(25px)';
			letter.style.transition = 'transform 0.5s ease';
		});

		let isAnimating = false;
		let currentIndex = 0;

		const animate = (elements, startY, endY, isEntering) => {
			isAnimating = true;
			currentIndex = 0;

			const animateNextLetter = () => {
				if (currentIndex < elements.length) {
					const letter = elements[currentIndex];
					letter.style.transform = `translateY(${endY}px)`;
					currentIndex++;
					setTimeout(animateNextLetter, 20); // 20ms stagger
				} else {
					isAnimating = false;
				}
			};

			animateNextLetter();
		};

		const handleMouseEnter = () => {
			if (!isAnimating) {
				animate(topLetters, 0, -25, true);
				animate(bottomLetters, 25, 0, true);
			}
		};

		const handleMouseLeave = () => {
			if (!isAnimating) {
				animate(topLetters, -25, 0, false);
				animate(bottomLetters, 0, 25, false);
			}
		};

		container.addEventListener('mouseenter', handleMouseEnter);
		container.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			container.removeEventListener('mouseenter', handleMouseEnter);
			container.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	const renderLetters = (ref) => {
		return letters.map(({ char, isSpace, key }) => {
			if (isSpace) {
				return (
					<span
						key={key}
						className={`${letterClassName}`}
					>
						&nbsp;
					</span>
				);
			}
			return (
				<a
					href={href}
					key={key}
					className={`letter inline-block whitespace-nowrap ${linkClassName} ${letterClassName}`}
				>
					{char}
				</a>
			);
		});
	};

	return (
		<div
			ref={containerRef}
			className={`relative cursor-pointer overflow-hidden ${className}`}
		>
			<div
				ref={topTextRef}
				className={`relative whitespace-nowrap ${textClassName}`}
			>
				{renderLetters()}
			</div>
			<div
				ref={bottomTextRef}
				className={`absolute top-0 whitespace-nowrap ${textClassName}`}
			>
				{renderLetters()}
			</div>
		</div>
	);
};

export default AnimatedLink;