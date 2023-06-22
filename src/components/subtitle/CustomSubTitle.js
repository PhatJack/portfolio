import React from 'react'

function CustomSubTitle({ children }) {
	return (
		<div className="section-header">
			{children}
		</div>
	)
}
CustomSubTitle.Head = (props) => <p className='text-sm cursor-pointer border border-gray-700 px-4 py-2 inline-flex justify-start items-center gap-2 uppercase rounded-full tracking-wide'>
	{props.children}
</p>
CustomSubTitle.Body = (props) => <h1 className='body-text text-[70px] mt-14 pr-52'>{props.children}</h1>
export default CustomSubTitle;