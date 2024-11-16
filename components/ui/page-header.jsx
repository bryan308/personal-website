"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const Header = ({ children, className, delay = 0, duration = 0.8, ...props }) => {
	return (
		<motion.h1
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
			className={cn("mb-4 text-center", className)}
			{...props}
		>
			{children}
		</motion.h1>
	)
}

export default Header
