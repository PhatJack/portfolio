import React from 'react'

function CustomSubTitle({ children }) {
	return (
		<div className="section-header">
			{children}
		</div>
	)
}
CustomSubTitle.Head = (props) => <p className='text-sm font-light cursor-pointer border border-gray-700 px-4 py-2 inline-flex justify-start items-center gap-2 uppercase rounded-full tracking-wide'>
	{props.children}
</p>
CustomSubTitle.Body = (props) => <h1 className='body-text text-7xl mt-14 leading-tight font-light'>{props.children}</h1>
CustomSubTitle.Description = (props) => <p className='body-description font-light mt-8 tracking-wide text-gray-400'>{props.children}</p>
export default CustomSubTitle;