"use client"

import { motion } from "motion/react"
import Image from "next/image"
import React from "react"

export const Profile = ({ delay = 0.5, duration = 0.5, blur = 6 }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: "10%", filter: `blur(${blur}px)` }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: delay,
				duration: duration,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
			className="flex items-center justify-center h-full"
		>
			<Image
				src="/images/me.jpg"
				alt="me"
				width={384}
				height={384}
				className="size-52 lg:size-60 rounded-full shadow-lg outline-4 outline outline-primary/20"
			/>
		</motion.div>
	)
}
