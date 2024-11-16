"use client"

import { motion } from "motion/react"
import React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const GradientMockup = ({
	className,
	src = "/images/noisy-grad1.jpg",
	alt = "noisy gradient",
	width = 1100,
	height = 554,
	...props
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, filter: "blur(12px)" }}
			whileInView={{ opacity: 1, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				// delay: delay,
				duration: 0.5,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
			className={cn("w-full h-60 my-20", className)}
			{...props}
		>
			<Image
				className="w-full h-full bg-cover rounded-3xl shadow-lg outline-8 outline outline-primary/20"
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</motion.div>
	)
}

export default GradientMockup
