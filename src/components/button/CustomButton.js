import React, { Children } from "react";
import { Link } from "react-router-dom";

function CustomButton({ children, ...attributes }) {
	const handleClick = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
		}
	};
	return (
		<Link {...attributes} to={'#contact'} key={'contact'}
			onClick={() => handleClick('contact')}
		>
			{children}
		</Link>
	);
}


export default CustomButton;
