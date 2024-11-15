"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React from "react"

const Subheader = ({ children, className, ...props }) => {
	return (
		<motion.h2
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ amount: 0.8 }}
			transition={{
				// delay: delay,
				duration: 0.5,
				ease: "easeInOut",
				repeat: 0,
				reapetType: "loop",
			}}
			className={cn("text-center", className)}
			{...props}
		>
			{children}
		</motion.h2>
	)
}

export default Subheader
