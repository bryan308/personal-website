import React from "react"

export const Highlights = () => {
	return (
		<video
			autoPlay
			loop
			className="rounded-xl mt-12 outline-8 outline outline-primary/20"
			preload="auto"
		>
			<source
				src="/highlights.mp4"
				type="video/mp4"
			/>
			<p>Your browser does not support the video tag.</p>
		</video>
	)
}
