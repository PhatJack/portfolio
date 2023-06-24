import React from 'react'

function Container({children}) {
	return (
		<div className="py-16">
			<div className='text-white relative ml-auto max-w-[1200px] w-full'>
				<div className="hero-container max-w-[770px] w-full overflow-hidden">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Container