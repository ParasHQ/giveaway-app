import React from 'react'

function Home() {
	return (
		<div
			className="h-screen relative bg-dark-primary-1 text-center App p-4 md:p-0 md:pb-4"
			style={{
				backgroundImage: `linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.69) 69%, rgba(0, 0, 0, 0) 100%)`,
			}}
		>
			<div className="m-auto max-w-md flex items-center justify-center h-full">
				<div>
					<h1 className="text-5xl font-bold mb-8 text-center">
						Giveaway by Paras
					</h1>
					<div className="flex items-center -mx-4 justify-center">
						<div className="px-4">
							<a
								href="https://paras.id"
								target="_blank"
								rel="noreferrer"
								className="text-gray-100 font-semibold border-b-2 border-transparent hover:border-gray-100"
							>
								Marketplace
							</a>
						</div>
						<div className="px-4">
							<a
								href="https://github.com/ParasHQ/giveaway-contract"
								target="_blank"
								rel="noreferrer"
								className="text-gray-100 font-semibold border-b-2 border-transparent hover:border-gray-100"
							>
								Github
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
