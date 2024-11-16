"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React from "react"

export const Paragraph = ({ children, className, delay }) => {
	return (
		<>
			<motion.p
				initial={{ opacity: 0, filter: "blur(12px)" }}
				whileInView={{ opacity: 1, filter: "blur(0)" }}
				viewport={{ amount: 0.5, once: false }}
				transition={{
					delay: delay,
					duration: 0.8,
					ease: "easeInOut",
					repeat: 0,
					repeatType: "loop",
				}}
				className={cn("max-w-prose", className)}
			>
				{children}
			</motion.p>
		</>
	)
}

// <p className="max-w-prose mt-4">
// 	Naturally, I love to experience new things and learn them. I have other skills like singing,
// 	and primarily I am good at it.
// </p>
