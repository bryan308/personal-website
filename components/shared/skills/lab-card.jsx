"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const LabCard = ({
	title,
	image = "/images/sample.png",
	description,
	className,
	delay,
	...props
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: "5%" }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ amount: 0.2, once: false }}
			transition={{
				delay: delay,
				duration: 0.5,
				ease: "easeInOut",
				repeat: 0,
				repeatType: "loop",
			}}
			className={cn(
				"flex flex-col justify-between items-start max-w-sm h-full rounded-xl overflow-hidden",
				className
			)}
			{...props}
		>
			<div>
				<Image
					src={image}
					alt={title}
					width={1800}
					height={1016}
				/>
			</div>
			<div className="py-4">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</motion.div>
	)
}

export default LabCard
