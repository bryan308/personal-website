"use client"

import { motion } from "motion/react"
import React from "react"

export const Gameplay = () => {
	return (
		<motion.video
			initial={{ opacity: 0, filter: "blur(12px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 1,
				duration: 0.5,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
			autoPlay
			loop
			controls
			muted
			className="rounded-xl mt-12 outline-8 outline outline-primary/20"
			preload="auto"
		>
			<source
				src="/gameplay.mp4"
				type="video/mp4"
			/>
			<p>Your browser does not support the video tag.</p>
		</motion.video>
	)
}
