"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

const GridItem = ({ className, delay, title, desc }) => {
	return (
		<div
			className={cn(
				"h-[200px] w-auto flex items-center justify-center flex-col border-primary/30 text-center p-4",
				className
			)}
		>
			<motion.div
				initial={{ opacity: 0, filter: "blur(6px)" }}
				whileInView={{ opacity: 1, filter: "blur(0)" }}
				viewport={{ amount: 0.5, once: false }}
				transition={{
					delay: delay,
					duration: 0.8,
					ease: "easeInOut",
					repeat: 0,
					repeatType: "loop",
				}}
			>
				<h4>{title}</h4>
				<p>{desc}</p>
			</motion.div>
		</div>
	)
}

export default GridItem
