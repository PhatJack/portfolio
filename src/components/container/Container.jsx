import React from 'react'

function Container({ children}) {
	return (
		<div className="py-[90px]">
			<div className='text-white relative m-auto 2xl:max-w-[1130px] w-full px-[15px] max-w-[770px]'>
				<div className="hero-container max-w-[770px] w-full overflow-hidden 2xl:ml-auto">
					{children}
				</div>
			</div>
		</div>
	)
}

export default Container