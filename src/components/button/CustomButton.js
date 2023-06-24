import React, { Children } from "react";
import { Link } from "react-router-dom";

function CustomButton({ children, ...attributes }) {
	return (
		<Link {...attributes} to={'#contact'}>
			{children}
		</Link>
	);
}


export default CustomButton;
