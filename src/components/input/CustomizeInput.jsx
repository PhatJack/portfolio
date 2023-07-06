import React from 'react'

function CustomizeInput({children}) {
  return (
	<section>
		{children}
	</section>
  )
}
CustomizeInput.Label = (props) => <label htmlFor="">{props.children}</label>
CustomizeInput.Input = (props) => <input type={props.children} placeholder='' />
export default CustomizeInput