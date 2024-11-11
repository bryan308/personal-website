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
		<div className={cn("w-full h-60 my-20", className)}>
			<Image
				className="w-full h-full bg-cover rounded-3xl shadow-lg outline-8 outline outline-primary/20"
				src={src}
				alt={alt}
				width={width}
				height={height}
				{...props}
			/>
		</div>
	)
}

export default GradientMockup
