"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React from "react"

const Subheader = ({ children, className, delay = 0, duration = 0.8, ...props }) => {
	return (
		<motion.h2
			initial={{ opacity: 0, y: "20%", filter: "blur(12px)" }}
			whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
			viewport={{ amount: 0.5, once: false }}
			transition={{
				delay: delay,
				duration: duration,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
			className={cn("text-center", className)}
			{...props}
		>
			{children}
		</motion.h2>
	)
}

export default Subheader
