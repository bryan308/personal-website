"use client"

import { motion } from "motion/react"
import Image from "next/image"
import React from "react"

export const Profile = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0, filter: "blur(6px)" }}
			whileInView={{ opacity: 1, scale: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: 0.5,
				duration: 0.8,
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
				className="size-52 lg:size-60 rounded-xl shadow-lg"
			/>
		</motion.div>
	)
}
